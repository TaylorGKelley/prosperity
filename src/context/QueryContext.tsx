'use client';

import { getQueryClient } from '@/lib/graphql/clients';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export function QueryProvider({ children }: React.PropsWithChildren) {
	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
