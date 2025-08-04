'use client';

import Link from 'next/link';
import React from 'react';

import { useAuthContext } from 'authentication-service-nextjs-sdk/client';
import { usePathname } from 'next/navigation';

const links = [
	{
		id: 0,
		title: 'Home',
		url: '/',
	},
	{
		id: 1,
		title: 'Budget',
		url: '/budget',
	},
	// {
	//   id: 2,
	//   title: 'wallet',
	//   url: '/wallet',
	// },
	// {
	//   id: 3,
	//   title: 'account',
	//   url: '/account',
	// },
] as const;

function NavBar() {
	const { user } = useAuthContext();
	const pathname = usePathname();

	return (
		<nav className='p-6 flex justify-between items-center'>
			<ul className='flex gap-6'>
				{links.map((link) => (
					<li key={link.id}>
						<Link
							href={link.url}
							className={`${pathname === link.url ? 'underline' : ''}`}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>

			{user ? (
				<span>Welcome, {user.email.split('@')[0]}!</span>
			) : (
				<Link href={'/auth/login'}>Log in</Link>
			)}
		</nav>
	);
}

export default NavBar;
