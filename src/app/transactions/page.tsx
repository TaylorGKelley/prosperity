import { createGraphClient } from '@/lib/graphql';
import { gql } from '@apollo/client';
import React from 'react';

export default async function Transactions() {
	const graphClient = await createGraphClient();
	const { data } = await graphClient.query({
		query: gql`
			query Transactions {
				transactions {
					id
					amount
					date
					description
				}
			}
		`,
	});

	return (
		<div>
			<h4>Transactions</h4>
			{data.transactions.map((transaction) => (
				<li key={transaction.id}>{transaction.amount}</li>
			))}
		</div>
	);
}
