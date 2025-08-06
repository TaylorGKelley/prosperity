import { createGraphClient } from '@/lib/graphql';
import { GET_TRANSACTION } from '@/lib/graphql/queries/transactions';
import {
	type TransactionsQuery,
	type TransactionsQueryVariables,
} from '@/lib/graphql/schema/operations';
import React from 'react';

export default async function Transactions() {
	const graphClient = await createGraphClient();
	const { data } = await graphClient.query<TransactionsQuery, TransactionsQueryVariables>({
		query: GET_TRANSACTION,
	});

	return (
		<div>
			<h4>Transactions</h4>
			{data.transactions.map((transaction) => (
				<li key={transaction.id}>
					{transaction.title} -- {transaction.amount}
				</li>
			))}
		</div>
	);
}
