import React from 'react';

import RegisterForm from '@/components/forms/RegisterForm';
import Link from 'next/link';

export default function Register() {
	return (
		<div className='container mx-auto p-4'>
			<RegisterForm />
			<Link
				className='inline-block px-4 py-2 border-2 border-gray-800 text-black text-center rounded-md disabled:opacity-50 w-full'
				href={`${process.env.AUTH_SERVICE_GOOGLE_OAUTH_URL}`}>
				Google Sign Up
			</Link>
		</div>
	);
}
