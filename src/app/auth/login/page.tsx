import React from 'react';

import LoginForm from '@/components/forms/LoginForm';
import Link from 'next/link';

export default function Login() {
	return (
		<div className='container mx-auto p-4'>
			<LoginForm />
			<Link
				className='inline-block px-4 py-2 border-2 border-gray-800 text-black text-center rounded-md disabled:opacity-50'
				href={`${process.env.AUTH_SERVICE_GOOGLE_OAUTH_URL}`}>
				Google Login
			</Link>
		</div>
	);
}
