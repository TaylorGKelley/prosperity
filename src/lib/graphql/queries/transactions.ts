import { gql } from '@apollo/client';

export const TRANSACTION_PAGE_QUERY = gql`
	query TransactionPage($monthDate: DateTime!, $budgetId: ID) {
		transactions(monthDate: $monthDate, budgetId: $budgetId) {
			items {
				id
				tellerId
				amount
				date
				description
				status
				type
			}
			pageInfo {
				length
				hasNextPage
				endCursor
			}
		}
		accounts(budgetId: $budgetId) {
			id
			currency
			enrollmentId
			lastFour
			name
			type
			subtype
			status
		}
		categories(monthDate: $monthDate, budgetId: $budgetId) {
			id
			name
			amount
			totalSpent
			endDate
		}
	}
`;
