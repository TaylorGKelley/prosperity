import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
	try {
		const cookieStore = await cookies();
		const searchParams = request.nextUrl.searchParams;

		const accessToken = searchParams.get('at');
		cookieStore.set('accessToken', accessToken || '', {
			httpOnly: true,
			sameSite: 'lax',
			path: '/',
			expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
		});

		return NextResponse.redirect(new URL(`${process.env.AUTH_POST_LOGOUT_REDIRECT}`));
	} catch (error) {
		return NextResponse.redirect(
			`${process.env.SITE_URL}/login?error=${
				error instanceof Error
					? error.message
					: 'An error occurred during authentication, please try again.'
			}`,
		);
	}
};
