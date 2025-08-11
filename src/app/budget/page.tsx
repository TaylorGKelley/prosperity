import { createGraphClient } from '@/lib/graphql';
import { GET_ALL_CATEGORIES_BY_MONTH } from '@/lib/graphql/queries/categories';
import {
	type CategoriesByMonthQuery,
	type CategoriesByMonthQueryVariables,
} from '@/lib/graphql/schema/operations';
import Link from 'next/link';
import React from 'react';

export default async function Budget() {
	const client = await createGraphClient();
	const { data } = await client.query<CategoriesByMonthQuery, CategoriesByMonthQueryVariables>({
		query: GET_ALL_CATEGORIES_BY_MONTH,
		variables: { monthDate: new Date() },
	});

	return (
		<section>
			<Link href='/budget/add-category' className='underline mb-2'>
				Add a category
			</Link>
			<h3 className='text-2xl'>Categories</h3>
			<ul>
				{data.categories.map((category) => (
					<li key={category.id}>{category.name}</li>
				))}
			</ul>
		</section>
	);
}
