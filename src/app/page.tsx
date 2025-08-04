import { fetchWithAuth, type User } from 'authentication-service-nextjs-sdk/server';

export default async function Home() {
	const response = await fetchWithAuth<{ user: User }>(
		`${process.env.AUTH_SERVICE_HOST_URL}/api/v1/users/me`,
		{
			method: 'GET',
		},
	);

	if (!response.success) {
		return (
			<main className='p-4'>
				<p>An error occured fetching user data</p>
			</main>
		);
	}

	return (
		<main className='p-4'>
			<h4 className='text-2xl font-semibold'>
				Welcome back, {response.data.user?.email?.split('@')[0]}
			</h4>
			{JSON.stringify(response.data)}
		</main>
	);
}
