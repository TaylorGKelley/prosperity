'use client';

import React, { type PropsWithChildren } from 'react';
import { useFormStatus } from 'react-dom';

type SubmitButtonProps = PropsWithChildren<{
	disabled: boolean;
}>;

export default function SubmitButton({ disabled, children }: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<button
			type='submit'
			disabled={disabled || pending}
			className='px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-50'>
			{/* replace this with a loading component : children */}
			{pending ? 'Creating...' : children}
		</button>
	);
}
