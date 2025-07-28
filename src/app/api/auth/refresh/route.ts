import axios from 'axios';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	const refreshToken = request.cookies.get('refreshToken')?.value;

	if (!refreshToken) {
		return NextResponse.json(
			{ error: 'Refresh token not found' },
			{ status: 401 }
		);
	}

	const refreshRes = await axios.post<{
		accessToken: string;
		message?: string;
	}>(
		`${process.env.AUTH_SERVICE_BASE_URL}/auth/refresh`,
		{},
		{
			headers: {
				Cookie: `refreshToken=${refreshToken}`,
			},
		}
	);

	if (refreshRes.status !== 200) {
		return NextResponse.json({
			message: refreshRes.data.message || 'Failed to refresh token',
		});
	}

	const response = NextResponse.json(
		{ accessToken: refreshRes.data.accessToken },
		{ status: 200 }
	);
	// Set new access token
	response.cookies.set({
		name: 'accessToken',
		value: refreshRes.data.accessToken!,
		expires: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
		path: '/',
		sameSite: 'lax',
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
	});
	// Set new refresh token
	response.cookies.set({
		name: 'refreshToken',
		value:
			refreshRes.headers['set-cookie']
				?.toString()
				.split(';')[0]
				.split('=')[1] || '',
		expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
		path: '/',
		sameSite: 'strict',
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
	});

	return response;
}
