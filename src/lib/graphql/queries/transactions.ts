import { gql } from '@apollo/client';

export const GET_TRANSACTION = gql`
	query Transactions {
		transactions {
			id
			title
			amount
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
