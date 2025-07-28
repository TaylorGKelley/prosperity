import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	let csrfToken = request.cookies.get('csrfToken')?.value;

	if (!csrfToken) {
		const response = await axios.get(
			`${process.env.AUTH_SERVICE_BASE_URL!}/csrf-token`
		);

		if (response.status !== 200)
			return NextResponse.json(
				{ error: 'Failed to fetch CSRF token' },
				{ status: 500 }
			);

		csrfToken = response.data.csrfToken;
	}

	const response = NextResponse.json({ csrfToken }, { status: 200 });
	response.cookies.set({
		name: 'csrfToken',
		value: csrfToken!,
		path: '/',
		sameSite: 'lax',
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
	});
	return response;
}
