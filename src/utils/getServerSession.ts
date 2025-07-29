// This is similar to how Kinde's getKindeServerSession works
export async function getKindeServerSession() {
	const cookieStore = cookies();
	let accessToken = cookieStore.get('kinde_access_token')?.value;
	const refreshToken = cookieStore.get('kinde_refresh_token')?.value;

	if (!refreshToken) {
		return { user: null, accessToken: null };
	}

	// If token is expired or missing, internally refresh it
	if (!accessToken || isTokenExpired(accessToken)) {
		// Make internal request to their own route handler
		const refreshResponse = await fetch('/api/auth/kinde/refresh', {
			method: 'POST',
			headers: { Cookie: request.headers.get('cookie') || '' },
		});

		if (refreshResponse.ok) {
			const newTokens = await refreshResponse.json();
			accessToken = newTokens.accessToken;
			// The route handler already set the cookie
		}
	}

	return {
		user: decodeToken(accessToken),
		accessToken,
	};
}
