import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { AuthProvider } from '@/context/AuthProvider';
import {
	fetchWithAuth,
	type User,
} from 'authentication-service-nextjs-sdk/server';

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
			user={response.success ? response.data.user : null}
			permissions={response.success ? response.data.permissions : []}>
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
