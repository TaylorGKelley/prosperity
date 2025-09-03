import React from 'react';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/context/AuthProvider';
import { fetchWithAuth, type User } from 'authentication-service-nextjs-sdk/server';

const inter = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin'],
});

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const response = await fetchWithAuth<{
		user: User;
		permissions: string[];
	}>(
		`${process.env.AUTH_SERVICE_HOST_URL}/api/v1/user-permissions/${process.env.AUTH_SERVICE_CONNECTED_SERVICE_ID}`,
	);

	return (
		<AuthProvider
			permissions={response.success ? response.data.permissions : []}
			user={response.success ? response.data.user : null}>
			<html lang='en'>
				<body
					className={`${inter.className} antialiased text-black dark:text-white bg-gray-50 dark:bg-gray-900`}>
					{children}
				</body>
			</html>
		</AuthProvider>
	);
}
