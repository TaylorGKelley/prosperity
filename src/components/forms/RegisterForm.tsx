'use client';

import { useRouter } from 'next/navigation';
import { useActionState } from 'react';

import { register } from '@/actions/forms/register';
import { type RegisterFormState } from '@/lib/zod/registerFormSchema';
import Input from '../inputs/Input';
import SubmitButton from '../inputs/SubmitButton';

export default function RegisterForm() {
	const router = useRouter();

	const handleSubmit = async (prevState: RegisterFormState | null, formData: FormData) => {
		const result = await register(prevState, formData);

		if (result?.user) {
			router.push('/');
		}

		return result;
	};

	const [state, action] = useActionState(handleSubmit, null);

	return (
		<form action={action} className='flex gap-2 flex-col'>
			<Input
				label='First Name'
				id='firstName'
				name='firstName'
				type='text'
				required
				defaultValue={state?.values?.firstName}
				errors={state?.errors?.firstName}
			/>

			<Input
				label='Last Name'
				id='lastName'
				name='lastName'
				type='text'
				required
				defaultValue={state?.values?.lastName}
				errors={state?.errors?.lastName}
			/>

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

			<Input
				label='Password Confirm'
				id='passwordConfirm'
				name='passwordConfirm'
				type='password`'
				required
				defaultValue={state?.values?.passwordConfirm}
				errors={state?.errors?.passwordConfirm}
			/>

			<SubmitButton>Submit</SubmitButton>
			<p>{state?.error}</p>
		</form>
	);
}
