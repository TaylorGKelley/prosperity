'use client';

import { useAuthContext } from 'authentication-service-nextjs-sdk/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

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
						<Link className={`${pathname === link.url ? 'underline' : ''}`} href={link.url}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>

			{user ? (
				<span>Welcome, {user.email.split('@')[0]}!</span>
			) : (
				<div className='flex gap-4'>
					<Link href={'/auth/login'}>Log in</Link>
					{'/'}
					<Link href={'/auth/register'}>Sign Up</Link>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
