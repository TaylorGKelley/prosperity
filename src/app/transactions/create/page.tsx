import CreateTransactionForm from '@/components/forms/CreateTransactionForm';
import { createGraphClient } from '@/lib/graphql';
import { GET_ALL_CATEGORIES_ID_NAME } from '@/lib/graphql/queries/categories';
import {
	type CategoriesIdNameQuery,
	type CategoriesIdNameQueryVariables,
} from '@/lib/graphql/schema/operations';
import React from 'react';

export default async function Create() {
	const graphClient = await createGraphClient();
	const categoriesQuery = graphClient
		.query<CategoriesIdNameQuery, CategoriesIdNameQueryVariables>({
			query: GET_ALL_CATEGORIES_ID_NAME,
		})
		.then(({ data }) => data.categories);

	return (
		<div className='container p-6'>
			<CreateTransactionForm categoriesQuery={categoriesQuery} />
		</div>
	);
}
