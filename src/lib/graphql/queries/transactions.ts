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
