'use client';

import { TellerConnect, type TellerConnectOnSuccess } from 'teller-connect-react';
import { linkAccount } from '@/actions/forms/account/linkAccount';
import { useActionState } from 'react';

type LinkAccountForm = {
	applicationId: string;
};

export default function LinkAccountForm({ applicationId }: LinkAccountForm) {
	const [state, action] = useActionState(linkAccount, null);

	const handleSuccess: TellerConnectOnSuccess = async (authorization) => {
		await action(authorization);
	};

	return (
		<div>
			<TellerConnect
				applicationId={applicationId}
				environment='sandbox'
				products={['transactions', 'balance']}
				onSuccess={handleSuccess}>
				Connect to bank
			</TellerConnect>
			{state?.error && <p>{state?.error}</p>}
		</div>
	);
}
