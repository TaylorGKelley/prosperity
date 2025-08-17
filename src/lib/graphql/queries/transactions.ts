import { gql } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
	query Transactions($monthDate: DateTime!) {
		transactions(monthDate: $monthDate) {
			id
			title
			amount
			transactionType
			date
			description
		}
	}
`;

export const GET_TRANSACTIONS_WITH_LIMIT_OFFSET = gql`
	query TransactionsWithLimitOffset($monthDate: DateTime!, $limit: Int!, $offset: Int!) {
		transactions(monthDate: $monthDate, pagination: { limit: $limit, offset: $offset }) {
			id
			title
			amount
			transactionType
			date
			description
		}
	}
`;

export const GET_TRANSACTION_BY_ID = gql`
	query Transaction($id: ID!) {
		transaction(id: $id) {
			id
			title
			amount
			categoryId
			transactionType
			date
			description
		}
	}
`;

export const CREATE_TRANSACTION = gql`
	mutation CreateTransaction(
		$categoryId: ID!
		$title: String!
		$amount: Float!
		$transactionType: TransactionType!
		$date: DateTime!
		$description: String
	) {
		createTransaction(
			input: {
				title: $title
				amount: $amount
				categoryId: $categoryId
				transactionType: $transactionType
				date: $date
				description: $description
			}
		) {
			id
			title
			amount
			transactionType
			date
			description
		}
	}
`;
