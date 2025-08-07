import { fetchWithAuth } from 'authentication-service-nextjs-sdk/server';
import React from 'react';

export default async function Budget() {
	const response = await fetchWithAuth<{
		user?: {
			id: number;
			email: string;
		};
	}>(`${process.env.AUTH_SERVICE_HOST_URL}/api/v1/users/me`);

	if (!response.success) {
		return (
			<section className='py-4 px-8'>
				<h4 className='text-3xl font-semibold mb-2'>Budget</h4>
				<p>Error fetching user data: {response.message}</p>
			</section>
		);
	}

	return (
		<section className='py-4 px-8'>
			<h4 className='text-3xl font-semibold mb-2'>Budget</h4>
			<p>
				Welcome, <strong>{response.data.user?.email}</strong>! Your user ID is{' '}
				<strong>{response.data.user?.id}</strong>.
			</p>
			<p>This is a placeholder page for the future budget page content.</p>
		</section>
	);
}
