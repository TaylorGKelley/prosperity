'use client';

import { createCategory } from '@/actions/forms/category/create';
import { type CreateCategoryFormState } from '@/lib/zod/createCategoryFormSchema';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import Input from '../inputs/Input';
import SubmitButton from '../inputs/SubmitButton';

export default function CreateCategoryForm() {
	const router = useRouter();

	const handleSubmit = async (prevState: CreateCategoryFormState | null, formData: FormData) => {
		console.log('submitting');
		const result = await createCategory(prevState, formData);
		console.log(result);
		if (result?.category) {
			router.push('/budget');
		}

		return result;
	};

	const [state, action] = useActionState(handleSubmit, null);

	return (
		<form action={action} className='flex gap-2 flex-col'>
			<Input
				label='Name'
				id='name'
				name='name'
				type='text'
				required
				defaultValue={state?.values.name}
				errors={state?.errors?.name}
			/>

			<Input
				label='Amount'
				id='amount'
				name='amount'
				type='number'
				required
				min='0.00'
				max='999999.00'
				step='0.01'
				defaultValue={state?.values.amount}
				errors={state?.errors?.amount}
			/>

			<p>{state?.error}</p>

			<SubmitButton>Create</SubmitButton>
		</form>
	);
}
