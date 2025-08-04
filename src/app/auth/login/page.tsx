import React from 'react';

import LoginForm from '@/components/forms/LoginForm';
import Link from 'next/link';

export default function Login() {
	return (
		<div className='container mx-auto p-4'>
			<LoginForm />
			<Link href={`${process.env.AUTH_SERVICE_GOOGLE_OAUTH_URL}`}>Login with Google</Link>
		</div>
	);
}
