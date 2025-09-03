import CategoryCard from '@/components/CategoryCard';
import { createGraphClient } from '@/lib/graphql';
import { GET_ALL_CATEGORIES } from '@/lib/graphql/queries/categories';
import {
	type GetAllCategoriesQuery,
	type GetAllCategoriesQueryVariables,
} from '@/lib/graphql/schema/operations';
import Link from 'next/link';
import React from 'react';

export default async function Budget() {
	const client = await createGraphClient();
	const { data } = await client.query<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>({
		query: GET_ALL_CATEGORIES,
		variables: { monthDate: new Date() },
	});

	return (
		<section>
			<Link href='/budget/add-category' className='underline mb-2'>
				Add a category
			</Link>
			<h3 className='text-2xl'>Categories</h3>
			{data.categories.map((category) => (
				<CategoryCard key={category.id} category={category} />
			))}
		</section>
	);
}
