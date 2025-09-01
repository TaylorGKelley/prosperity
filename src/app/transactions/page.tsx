'use server';

import { createGraphClient } from '@/lib/graphql';
import { GET_TRANSACTIONS } from '@/lib/graphql/queries/transactions';
import {
	type TransactionsQuery,
	type TransactionsQueryVariables,
} from '@/lib/graphql/schema/operations';
import Link from 'next/link';
import React from 'react';

export default async function Transactions() {
	const graphClient = await createGraphClient();
	const { data } = await graphClient.query<TransactionsQuery, TransactionsQueryVariables>({
		query: GET_TRANSACTIONS,
		variables: {
			monthDate: new Date(),
		},
	});

	return (
		<div>
			<div className='flex justify-between gap-6 max-w-md'>
				<h4>Transactions</h4>
				<Link href='/transactions/create' className='underline dark:text-gray-300'>
					Add new
				</Link>
			</div>
			{data.transactions.map((transaction) => (
				<li key={transaction.id}>
					{transaction.title} -- {transaction.amount}
				</li>
			))}
		</div>
	);
}
