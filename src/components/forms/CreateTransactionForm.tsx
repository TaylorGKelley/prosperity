'use client';

import { createTransaction } from '@/actions/forms/transaction/create';
import { type Category, TransactionType } from '@/lib/graphql/schema/operations';
import { type CreateTransactionFormState } from '@/lib/zod/createTransactionFormSchema';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useActionState } from 'react';
import Input from '../inputs/Input';
import SubmitButton from '../inputs/SubmitButton';
import TextArea from '../inputs/TextArea';
import Select from '../inputs/Select';

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
		<form action={action} className='flex gap-2 flex-col'>
			<Input
				label='Amount'
				id='amount'
				name='amount'
				placeholder='10.00'
				type='number'
				required
				min='0.00'
				max='999999.00'
				step='0.01'
				defaultValue={state?.values.amount}
				errors={state?.errors?.amount}
			/>

			<Input
				label='Name'
				id='title'
				name='title'
				placeholder='i.e. Walmart, Amazon, etc.'
				type='text'
				required
				defaultValue={state?.values.title}
				errors={state?.errors?.title}
			/>

			<Select
				label='Category'
				id='categoryId'
				name='categoryId'
				placeholder='Select a category'
				options={categories}
				required
				defaultValue={state?.values.categoryId}
				errors={state?.errors?.categoryId}
			/>

			<Select
				label='Transaction Type'
				id='transactionType'
				name='transactionType'
				placeholder='Select a transaction type'
				options={Object.values(TransactionType).map((key) => ({ id: key, name: key }))}
				required
				defaultValue={state?.values.transactionType}
				errors={state?.errors?.transactionType}
			/>

			<Input
				label='Date'
				id='date'
				name='date'
				type='date'
				required
				defaultValue={state?.values.date}
				errors={state?.errors?.date}
			/>

			<TextArea
				id='description'
				name='description'
				label='Notes'
				defaultValue={state?.values.description}
				errors={state?.errors?.description}
			/>

			<SubmitButton>Log In</SubmitButton>

			<p>{state?.error}</p>
		</form>
	);
}
