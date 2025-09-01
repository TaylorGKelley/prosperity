'use client';

import { useRouter } from 'next/navigation';
import { useActionState } from 'react';

import { login } from '@/actions/forms/login';
import { type LoginFormState } from '@/lib/zod/loginFormSchema';
import Input from '../inputs/Input';
import SubmitButton from '../inputs/SubmitButton';

export default function LoginForm() {
	const router = useRouter();

	const handleSubmit = async (prevState: LoginFormState | null, formData: FormData) => {
		const result = await login(prevState, formData);

		if (result?.user) {
			router.push('/');
		}

		return result;
	};

	const [state, action] = useActionState(handleSubmit, null);

	return (
		<div>
			<form action={action} className='flex gap-2 flex-col'>
				<Input
					label='Email'
					id='email'
					name='email'
					type='email'
					required
					defaultValue={state?.values?.email}
					errors={state?.errors?.email}
				/>

				<Input
					label='Password'
					id='password'
					name='password'
					type='password'
					required
					defaultValue={state?.values?.password}
					errors={state?.errors?.password}
				/>

				<SubmitButton>Submit</SubmitButton>
				<p>{state?.error}</p>
			</form>
		</div>
	);
}
