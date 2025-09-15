import { withAuth } from 'authentication-service-nextjs-sdk/server';
import { NextResponse } from 'next/server';

// This is used to protect an entire page from a user, redirecting to /unauthorized
const protectedPaths: Record<string, string[]> = {
	'/': ['default'],
	'/budget': ['default'],
	'/wallet': ['default'],
	'/transactions': ['default'],
	'/transactions/create': ['default'],
};

export default withAuth(
	async function middleware() {
		return NextResponse.next();
	},
	{
		protectedPaths,
	},
);

export const config = {
	matcher: [
		// Run on everything but Next internals and static files
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
	],
};
