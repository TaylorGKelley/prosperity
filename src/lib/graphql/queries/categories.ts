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

export const GET_CATEGORY_BY_ID = gql`
	query Category($id: ID!) {
		category(id: $id) {
			id
			name
			amount
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

export const DELETE_CATEGORY = gql`
	mutation DeleteCategory($id: ID!) {
		deleteCategory(id: $id)
	}
`;
