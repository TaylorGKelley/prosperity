import { gql } from '@apollo/client';

export const GET_CATEGORIES_ID_NAME = gql`
	query CategoriesIdName {
		categories {
			id
			name
		}
	}
`;
