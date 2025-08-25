import { gql } from '@apollo/client';

const CREATE_ACCOUNT = gql`
	mutation CreateAccount($accessToken: String!) {
		createAccount(input: { accessToken: $accessToken }) {
			id
		}
	}
`;
