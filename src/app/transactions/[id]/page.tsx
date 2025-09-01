'use server';

import CreateTransactionForm from '@/components/forms/CreateTransactionForm';
import { createGraphClient } from '@/lib/graphql';
import { GET_ALL_CATEGORIES_ID_NAME } from '@/lib/graphql/queries/categories';
import { GET_TRANSACTION_BY_ID } from '@/lib/graphql/queries/transactions';
import {
	type TransactionQuery,
	type TransactionQueryVariables,
	type CategoriesIdNameQuery,
	type CategoriesIdNameQueryVariables,
} from '@/lib/graphql/schema/operations';
import isUuidV4 from '@/utils/isUuidV4';
import { type UUID } from 'node:crypto';
import React from 'react';

type CreatePageProps = {
	params: Promise<{ id: UUID | string }>;
};

export default async function Create({ params }: CreatePageProps) {
	const { id } = await params;

	const graphClient = await createGraphClient();
	const categoriesQuery = graphClient
		.query<CategoriesIdNameQuery, CategoriesIdNameQueryVariables>({
			query: GET_ALL_CATEGORIES_ID_NAME,
		})
		.then(({ data }) => data.categories);

	const defaultValueQuery = isUuidV4(id)
		? graphClient
				.query<TransactionQuery, TransactionQueryVariables>({
					query: GET_TRANSACTION_BY_ID,
					variables: { id: id as UUID },
				})
				.then(({ data }) => data.transaction)
		: Promise.resolve(null);

	return (
		<div className='container p-6'>
			<CreateTransactionForm
				categoriesQuery={categoriesQuery}
				defaultValueQuery={defaultValueQuery}
			/>
		</div>
	);
}
