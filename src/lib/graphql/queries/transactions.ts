import { gql } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
	query GetTransactions($monthDate: DateTime!) {
		transactions(monthDate: $monthDate) {
			items {
				id
				accountId
				categoryId
				amount
				date
				description
				status
				type
			}
		}
	}
`;

export const GET_TRANSACTIONS_WITH_PAGINATION = gql`
	query GetTransactionsWithPagination($monthDate: DateTime!, $pagination: CursorPaginationInput) {
		transactions(monthDate: $monthDate, pagination: $pagination) {
			items {
				id
				tellerId
				accountId
				categoryId
				amount
				date
				description
				status
				type
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
`;

export const GET_TRANSACTION_BY_ID = gql`
	query GetTransactionById($id: ID!) {
		transaction(id: $id) {
			id
			accountId
			categoryId
			amount
			date
			description
			status
			type
		}
	}
`;

export const SYNC_TRANSACTIONS = gql`
	mutation SyncTransactions {
		syncTransactions {
			status
			error
		}
	}
`;
