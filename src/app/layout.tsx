import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { QueryProvider } from '@/context/QueryContext';
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Prosperity',
	description: 'Your personal finance tracker',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} antialiased`}>
				<QueryProvider>
					<AuthProvider baseUrl='http://localhost:7001'>
						<main>
							<NavBar />
							{children}
						</main>
					</AuthProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
