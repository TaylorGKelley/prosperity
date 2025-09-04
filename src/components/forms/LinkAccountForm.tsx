'use client';

import { useState } from 'react';
import { TellerConnect, type TellerConnectOnSuccess } from 'teller-connect-react';

export default function LinkAccountForm() {
	const [error, setError] = useState<string>();

	const handleSuccess: TellerConnectOnSuccess = async (authorization) => {
		try {
			const res = await fetch('/api/teller-success', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(authorization),
			});

			if (res.status === 500) {
				throw new Error((await res.json()).error);
			}
		} catch (error) {
			if (typeof error === 'string') setError(error);
			else if (error instanceof Error) setError(error.message);
			else setError(JSON.stringify(error));
		}
	};

	return (
		<div>
			<TellerConnect
				applicationId={process.env.NEXT_PUBLIC_TELLER_APPLICATION_ID!}
				environment={
					process.env.NEXT_PUBLIC_TELLER_ENVIRONMENT! as 'sandbox' | 'development' | 'production'
				}
				products={['transactions', 'balance']}
				onSuccess={handleSuccess}
				style={{
					color: 'black',
				}}>
				Connect to bank
			</TellerConnect>
			{error && <p>{error}</p>}
		</div>
	);
}
