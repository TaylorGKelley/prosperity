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
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<AuthProvider
					permissions={response.success ? response.data.permissions : []}
					user={response.success ? response.data.user : null}>
					{/* <ThemeProvider attribute='class' defaultTheme='system' enableSystem> */}
					{children}
					{/* <Toaster position='bottom-right' /> */}
					{/* </ThemeProvider> */}
				</AuthProvider>
			</body>
		</html>
	);
}
