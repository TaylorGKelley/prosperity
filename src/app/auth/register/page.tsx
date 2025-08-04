import React from 'react';

import RegisterForm from '@/components/forms/RegisterForm';
import Link from 'next/link';

export default function Register() {
	return (
		<div className='container mx-auto p-4'>
			<RegisterForm />
			<Link href={`${process.env.AUTH_SERVICE_GOOGLE_OAUTH_URL}`}>Login with Google</Link>
		</div>
	);
}
