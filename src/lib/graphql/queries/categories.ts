import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
	query Categories {
		categories {
			id
			name
			amount
			startDate
			endDate
		}
	}
`;

export const GET_CATEGORIES_ID_NAME = gql`
	query CategoriesIdName {
		categories {
			id
			name
		}
	}
`;

export const CREATE_CATEGORY = gql`
	mutation CreateCategory($name: String!, $amount: Float!, $startDate: DateTime!) {
		createCategory(input: { name: $name, amount: $amount, startDate: $startDate }) {
			id
			name
			amount
			startDate
			endDate
		}
	}
`;
