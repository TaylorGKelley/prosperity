import { createGraphClient } from '@/lib/graphql';
import { type TellerConnectEnrollment } from 'teller-connect-react';

export type LinkAccountFormState = {
	error?: string;
};

export async function linkAccount(
	_prevState: LinkAccountFormState | null,
	enrollmentData: TellerConnectEnrollment,
): Promise<LinkAccountFormState> {
	try {
		// Send Graph Mutation
		const client = await createGraphClient({ isInServerAction: true });
		const { data } = await client.mutate<CreateAccountMutation, CreateAccountMutationVariables>({
			mutation: CREATE_ACCOUNT,
			variables: {
				accessToken: enrollmentData.accessToken,
			},
		});

		return {};
	} catch (error) {
		return {
			error: (error as Error).message,
		};
	}
}
