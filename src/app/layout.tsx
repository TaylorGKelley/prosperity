import React from 'react';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/context/AuthProvider';
import { fetchWithAuth, type User } from 'authentication-service-nextjs-sdk/server';
import './globals.css';

const inter = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Prosperity',
	description: 'Your personal finance tracker',
	openGraph: {
		title: 'Prosperity Budgeting',
		description:
			'A budgeting and finance tracking site, to help keep track of purchases and monthly spending.',
		url: '',
		siteName: 'Prosperity',
		locale: 'en_US',
		type: 'website',
	},
};

export default async function RootLayout({
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
