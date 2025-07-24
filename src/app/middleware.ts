import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes: Record<string, string[]> = {
	'/admin': ['admin'],
	'/dashboard': ['user', 'admin'],
	// add more protected routes and required roles
};

function getAccessToken(req: NextRequest): string | undefined {
	const raw = req.cookies.get('accessToken')?.value;

	return raw;
}

async function isAuthorized(
	path: string,
	accessToken: string
): Promise<boolean> {
	const requiredPermissions = protectedRoutes[path];

	// Check if authenticated and get permissions
	const response = await axios.get(
		`${process.env.AUTH_CLIENT_BASE_URL!}/api/v1/user-permissions/${process.env
			.AUTH_CLIENT_CLIENT_ID!}`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	// Validate permissions
	if (response.status !== 200) {
		return false;
	}

	for (let i = 0; i < requiredPermissions.length; i++) {
		const permission = requiredPermissions[i];
		if (!response.data.permissions.includes(permission)) {
			return false;
		}
	}

	return true;
}

export default async function middleware(request: NextRequest) {
	const accessToken = getAccessToken(request); // Retrieve token from cookies

	if (!accessToken) {
		// Redirect to login
		return NextResponse.redirect(new URL('/login', request.url));
	}

	const url = request.nextUrl.clone();
	if (!(await isAuthorized(url.pathname, accessToken))) {
		// Redirect to unauthorized page or home
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		// Run on everything but Next internals and static files
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
	],
};
