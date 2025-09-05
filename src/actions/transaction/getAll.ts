'use server';

import { createGraphClient } from '@/lib/graphql';
import { GET_TRANSACTIONS_WITH_PAGINATION } from '@/lib/graphql/queries/transactions';
import {
	type GetTransactionsWithPaginationQuery,
	type GetTransactionsWithPaginationQueryVariables,
} from '@/lib/graphql/schema/operations';
import { type UUID } from 'node:crypto';

export default async function getAllTransactions(
	filterInfo: {
		count: number;
		monthDate?: Date;
		cursor?: {
			date: Date;
			id: UUID;
		};
	},
	config?: { fromServerComponent: boolean },
) {
	try {
		const graphClient = await createGraphClient({
			isInServerAction: config?.fromServerComponent == true ? false : true,
		});
		const { data } = await graphClient.query<
			GetTransactionsWithPaginationQuery,
			GetTransactionsWithPaginationQueryVariables
		>({
			query: GET_TRANSACTIONS_WITH_PAGINATION,
			variables: {
				monthDate: filterInfo.monthDate || new Date(),
			},
		});

		return data.transactions;
	} catch (error) {
		return {
			error: (error as Error).message,
		};
	}
}
