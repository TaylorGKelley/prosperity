import { gql } from '@apollo/client';

export const GET_ALL_CATEGORIES_BY_MONTH = gql`
	query CategoriesByMonth($monthDate: DateTime!) {
		categories(monthDate: $monthDate) {
			id
			name
			amount
		}
	}
`;

export const GET_ALL_CATEGORIES_ID_NAME = gql`
	query CategoriesIdName {
		categories {
			id
			name
		}
	}
`;

export const CREATE_CATEGORY = gql`
	mutation CreateCategory($name: String!, $amount: Float!) {
		createCategory(input: { name: $name, amount: $amount }) {
			id
			name
			amount
		}
	}
`;
