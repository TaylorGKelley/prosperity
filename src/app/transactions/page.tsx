'use server';

import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { createGraphClient } from '@/lib/graphql';
import { GET_TRANSACTIONS } from '@/lib/graphql/queries/transactions';
import {
	type GetTransactionsQuery,
	type GetTransactionsQueryVariables,
} from '@/lib/graphql/schema/operations';
import Link from 'next/link';
import React from 'react';

export default async function Transactions() {
	const graphClient = await createGraphClient();
	const { data } = await graphClient.query<GetTransactionsQuery, GetTransactionsQueryVariables>({
		query: GET_TRANSACTIONS,
		variables: {
			monthDate: new Date(),
		},
	});

	return (
		<>
			<header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
				<SidebarTrigger className='-ml-1' />
				<Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
				<Breadcrumb>
					<BreadcrumbList>
						{/* <BreadcrumbItem className='hidden md:block'>
							<BreadcrumbLink href='/'>Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className='hidden md:block' /> */}
						<BreadcrumbItem>
							<BreadcrumbPage>Wallet</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</header>
			<div>
				<div className='flex justify-between gap-6 max-w-md'>
					<h4>Transactions</h4>
					<Link href='/transactions/create' className='underline dark:text-gray-300'>
						Add new
					</Link>
				</div>
				{data.transactions.items.map((transaction) => (
					<li key={transaction.id}>
						{transaction.description} -- {transaction.amount}
					</li>
				))}
			</div>
		</>
	);
}
