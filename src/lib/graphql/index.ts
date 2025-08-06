import 'server-only';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { cookies, headers } from 'next/headers';

export const createGraphClient = async () => {
	const headerStore = await headers();
	const cookieStore = await cookies();

	const httpLink = createHttpLink({
		uri: process.env.BACKEND_API_BASE_URL,
	});

	const authLink = setContext((_, { headers }) => {
		const isRefreshed = headerStore.get('x-token-refreshed') === 'true';
		const accessToken = isRefreshed
			? headerStore.get('x-access-token') || ''
			: cookieStore.get('accessToken')?.value || '';

		return {
			headers: {
				...headers,
				authorization: accessToken ? `Bearer ${accessToken}` : '',
			},
		};
	});

	return new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});
};
