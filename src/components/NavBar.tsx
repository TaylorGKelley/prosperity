'use client';

import { cn } from '@/utils';
import { CalendarIcon, HouseIcon, UserIcon, WalletIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
	{
		id: 0,
		title: 'Home',
		Icon: HouseIcon,
		url: '/',
	},
	{
		id: 1,
		title: 'Budget',
		Icon: CalendarIcon,
		url: '/budget',
	},
	{
		id: 2,
		title: 'wallet',
		Icon: WalletIcon,
		url: '/wallet',
	},
	{
		id: 3,
		title: 'profile',
		Icon: UserIcon,
		url: '/profile',
	},
] as const;

function NavBar() {
	const pathname = usePathname();

	return (
		<nav className='absolute bottom-0 inset-x-0  p-6 flex justify-between items-center'>
			<ul className='flex gap-6'>
				{links.map((link) => (
					<li key={link.id}>
						<Link
							className={cn('text-2xl', {
								'underline text-black': pathname !== link.url,
								'text-gray-400': pathname !== link.url,
							})}
							href={link.url}>
							<link.Icon />
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
