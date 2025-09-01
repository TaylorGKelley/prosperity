import { NextResponse } from 'next/server';
import { createGraphClient } from '@/lib/graphql';
import {
	type CreateAccountMutation,
	type CreateAccountMutationVariables,
} from '@/lib/graphql/schema/operations';
import { CREATE_ACCOUNT } from '@/lib/graphql/queries/accounts';

export async function POST(req: Request) {
	const data = await req.json();

	// Send Graph Mutation
	const client = await createGraphClient({ isInServerAction: true });
	const { data: response } = await client.mutate<
		CreateAccountMutation,
		CreateAccountMutationVariables
	>({
		mutation: CREATE_ACCOUNT,
		variables: {
			accessToken: data.accessToken,
		},
	});

	return NextResponse.json({ success: true, data: response });
}
