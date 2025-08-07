'use client';

import { createTransaction } from '@/actions/forms/transaction/create';
import { type Category, TransactionType } from '@/lib/graphql/schema/operations';
import { type CreateTransactionFormState } from '@/lib/zod/createTransactionFormSchema';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useActionState } from 'react';
import Input from '../inputs/Input';
import SubmitButton from '../inputs/SubmitButton';

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

	const [state, action] = useActionState(handleSubmit, null);

	if (categories && categories.length < 1) {
		return (
			<p>
				Please <Link href='/budget'>add a budget category</Link>
			</p>
		);
	}

	return (
		<form action={action} className='flex gap-2 flex-col w-sm'>
			<Input
				label='Amount'
				id='amount'
				name='amount'
				placeholder='amount'
				type='number'
				required
				min='0.00'
				max='999999.00'
				step='0.01'
				defaultValue={state?.values.amount}
				errors={state?.errors?.amount}
			/>

			<Input
				label='Title'
				id='title'
				name='title'
				placeholder='title'
				type='text'
				required
				defaultValue={state?.values.title}
				errors={state?.errors?.title}
			/>

			<label htmlFor='categoryId'>Category</label>
			<select id='categoryId' name='categoryId' required defaultValue={state?.values.categoryId}>
				<option value={undefined}>Select a category</option>
				{categories.map(({ id, name }) => (
					<option key={id} value={id} className='bg-gray-900'>
						{name}
					</option>
				))}
			</select>
			<p>{state?.errors?.categoryId || ''}</p>

			<label htmlFor='transactionType'>Transaction Type</label>
			<select
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

			<Input
				label='Date'
				id='date'
				name='date'
				placeholder='date'
				type='date'
				required
				defaultValue={state?.values.date}
				errors={state?.errors?.date}
			/>

			<label htmlFor='description'>Description (optional)</label>
			<textarea
				id='description'
				name='description'
				placeholder='Description...'
				defaultValue={state?.values.description}
				aria-invalid={state?.errors?.description && state?.errors?.description.length > 0}
				aria-describedby='description-error'
			/>
			<p id='description-error'>{state?.errors?.description}</p>

			<SubmitButton>Log In</SubmitButton>

			<p>{state?.error}</p>
		</form>
	);
}
