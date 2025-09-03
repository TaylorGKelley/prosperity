import React from 'react';

import LoginForm from '@/components/forms/LoginForm';
import { Banknote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
	return (
		<div className='grid min-h-svh lg:grid-cols-2'>
			<div className='flex flex-col gap-4 p-6 md:p-10'>
				<div className='flex justify-center gap-2 md:justify-start'>
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
					<div className='w-full max-w-xs'>
						<LoginForm />
					</div>
				</div>
			</div>
			<div className='bg-muted relative hidden lg:block'>
				<Image
					width={100}
					height={100}
					src='/placeholder.svg'
					alt='Image'
					className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
				/>
			</div>
		</div>
	);
}
