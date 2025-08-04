import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import { fetchWithAuth, type User } from 'authentication-service-nextjs-sdk/server';

import './globals.css';
import NavBar from '@/components/NavBar';
import { AuthProvider } from '@/context/AuthProvider';

const inter = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Prosperity',
	description: 'Your personal finance tracker',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const response = await fetchWithAuth<{
		user: User;
		permissions: string[];
	}>(`${process.env.AUTH_SERVICE_HOST_URL}/api/v1/users/me`);

	return (
		<AuthProvider
			permissions={response.success ? response.data.permissions : []}
			user={response.success ? response.data.user : null}
		>
			<html lang='en'>
				<body className={`${inter.variable} antialiased`}>
					<header>
						<NavBar />
					</header>
					<main>{children}</main>
				</body>
			</html>
		</AuthProvider>
	);
}
