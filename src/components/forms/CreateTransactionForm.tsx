'use client';

import { createTransaction } from '@/actions/forms/transaction/create';
import { type Category, TransactionType } from '@/lib/graphql/schema/operations';
import { type CreateTransactionFormState } from '@/lib/zod/createTransactionFormSchema';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useActionState } from 'react';

type CreateTransactionFormProps = {
	categoriesQuery: Promise<Pick<Category, 'id' | 'name'>[]>;
};

export default function CreateTransactionForm({ categoriesQuery }: CreateTransactionFormProps) {
	const categories = use(categoriesQuery);

	const router = useRouter();

	const handleSubmit = async (prevState: CreateTransactionFormState | null, formData: FormData) => {
		const result = await createTransaction(prevState, formData);

		if (result?.transaction) {
			router.push('/transactions');
		}

		return result;
	};

	const [state, action, isPending] = useActionState(handleSubmit, null);

	if (categories && categories.length < 1) {
		return (
			<p>
				Please <Link href='/budget'>add a budget category</Link>
			</p>
		);
	}

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
				defaultValue={state?.values.amount}
			/>
			<p>{state?.errors?.amount || ''}</p>

			<input
				className='p-2 rounded-md bg-gray-800'
				id='title'
				name='title'
				placeholder='title'
				type='text'
				required
				defaultValue={state?.values.title}
			/>
			<p>{state?.errors?.title || ''}</p>

			<select
				className='p-2 rounded-md bg-gray-800'
				id='categoryId'
				name='categoryId'
				required
				defaultValue={state?.values.categoryId}>
				<option value={undefined}>Select a category</option>
				{categories.map(({ id, name }) => (
					<option key={id} value={id} className='bg-gray-900'>
						{name}
					</option>
				))}
			</select>
			<p>{state?.errors?.categoryId || ''}</p>

			<select
				className='p-2 rounded-md bg-gray-800'
				id='transactionType'
				name='transactionType'
				required
				defaultValue={state?.values.transactionType}>
				<option value={undefined}>Select a transfer type</option>
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
				defaultValue={state?.values.date}
			/>
			<p>{state?.errors?.date || ''}</p>

			<textarea
				className='p-2 rounded-md bg-gray-800'
				id='description'
				name='description'
				placeholder='Description...'
				defaultValue={state?.values.description}
			/>
			<p>{state?.errors?.description}</p>

			<button disabled={isPending} type='submit'>
				{isPending ? 'Logging in...' : 'Submit'}
			</button>

			<p>{state?.error}</p>
		</form>
	);
}
