'use client';

import { TellerConnect, type TellerConnectOnSuccess } from 'teller-connect-react';

type LinkAccountForm = {
	applicationId: string;
};

export default function LinkAccountForm({ applicationId }: LinkAccountForm) {
	const handleSuccess: TellerConnectOnSuccess = async (authorization) => {
		try {
			await fetch('/api/teller-success', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(authorization),
			});
		} catch {
			console.error('Failed to send Teller success');
		}
	};

	return (
		<div>
			<TellerConnect
				applicationId={applicationId}
				environment='sandbox'
				products={['transactions', 'balance']}
				onSuccess={handleSuccess}
				style={{
					color: 'black',
				}}>
				Connect to bank
			</TellerConnect>
		</div>
	);
}
