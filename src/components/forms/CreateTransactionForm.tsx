'use client';

import { createTransaction } from '@/actions/forms/transaction/create';
import { TransactionType } from '@/lib/graphql/schema/operations';
import { type CreateTransactionFormState } from '@/lib/zod/createTransactionFormSchema';
import { useRouter } from 'next/navigation';
import React, { useActionState } from 'react';

export default function CreateTransactionForm() {
	const router = useRouter();

	const handleSubmit = async (prevState: CreateTransactionFormState | null, formData: FormData) => {
		const result = await createTransaction(prevState, formData);

		if (result?.transaction) {
			router.push('/transactions');
		}

		return result;
	};

	const [state, action, isPending] = useActionState(handleSubmit, null);

	return (
		<form action={action} className='flex gap-2 flex-col w-sm'>
			<input
				className='p-2 rounded-md bg-gray-800'
				id='amount'
				name='amount'
				placeholder='amount'
				type='number'
				required
				min='0.00'
				max='999999.00'
				step='0.01'
			/>
			<p>{state?.errors?.amount || ''}</p>

			<input
				className='p-2 rounded-md bg-gray-800'
				id='title'
				name='title'
				placeholder='title'
				type='text'
				required
			/>
			<p>{state?.errors?.title || ''}</p>

			<select
				className='p-2 rounded-md bg-gray-800'
				id='transactionType'
				name='transactionType'
				required>
				<option value={undefined} selected disabled>
					Select a transfer type
				</option>
				{Object.values(TransactionType).map((key) => (
					<option key={key} value={key} className='bg-gray-900'>
						{key}
					</option>
				))}
			</select>
			<p>{state?.errors?.transactionType || ''}</p>

			<input
				className='p-2 rounded-md bg-gray-800'
				id='date'
				name='date'
				placeholder='date'
				type='date'
				required
			/>
			<p>{state?.errors?.date || ''}</p>

			<textarea
				className='p-2 rounded-md bg-gray-800'
				id='description'
				name='description'
				placeholder='Description...'
			/>
			<p>{state?.errors?.description}</p>

			<button disabled={isPending} type='submit'>
				{isPending ? 'Logging in...' : 'Submit'}
			</button>

			<p>{state?.error}</p>
		</form>
	);
}
