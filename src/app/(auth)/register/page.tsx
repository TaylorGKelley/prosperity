import React from 'react';

import RegisterForm from '@/components/forms/RegisterForm';
import Link from 'next/link';
import { Banknote } from 'lucide-react';

export default function Register() {
	return (
		<div className='grid min-h-svh'>
			<div className='flex flex-col gap-4 p-6 md:p-10'>
				<div className='flex gap-2 justify-start'>
					<Link href='/' className='flex items-center gap-2 font-medium'>
						<div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
							<Banknote className='size-4' />
						</div>
						<div className='flex flex-col gap-0.5 leading-none'>
							<span className='text-lg font-semibold'>Prosperity</span>
						</div>
					</Link>
				</div>
				<div className='flex flex-1 items-center justify-center'>
					<div className='w-full max-w-md'>
						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	);
}
