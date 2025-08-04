'use client';

import { useRouter } from 'next/navigation';
import { useActionState } from 'react';

import { register } from '@/actions/forms/register';
import { type RegisterFormState } from '@/lib/zod/registerFormSchema';

export default function RegisterForm() {
	const router = useRouter();

	const handleSubmit = async (prevState: RegisterFormState | null, formData: FormData) => {
		const result = await register(prevState, formData);

		if (result?.user) {
			router.push('/');
		}

		return result;
	};

	const [state, action, isPending] = useActionState(handleSubmit, null);

	return (
		<form action={action} className='flex gap-2 flex-col w-sm'>
			<input className='p-2 rounded-md bg-white' id='firstName' name='firstName' type='text' />
			<p>{state?.errors?.email || ''}</p>

			<input className='p-2 rounded-md bg-white' id='lastName' name='lastName' type='text' />
			<p>{state?.errors?.email || ''}</p>

			<input className='p-2 rounded-md bg-white' id='email' name='email' type='email' />
			<p>{state?.errors?.email || ''}</p>

			<input className='p-2 rounded-md bg-white' id='password' name='password' type='password' />
			<p>{state?.errors?.password || ''}</p>

			<input
				className='p-2 rounded-md bg-white'
				id='passwordConfirm'
				name='passwordConfirm'
				type='password'
			/>
			<p>{state?.errors?.password || ''}</p>

			<button disabled={isPending} type='submit'>
				{isPending ? 'Logging in...' : 'Submit'}
			</button>

			<p>{state?.error}</p>
		</form>
	);
}
