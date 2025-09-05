import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbLink,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { createGraphClient } from '@/lib/graphql';
import { GET_TRANSACTIONS_WITH_PAGINATION } from '@/lib/graphql/queries/transactions';
import {
	type GetTransactionsWithPaginationQuery,
	type GetTransactionsWithPaginationQueryVariables,
} from '@/lib/graphql/schema/operations';
import React from 'react';
import Filters, { type FilterSearchParams } from './filters';
import Format from '@/utils/Format';
import TransactionList from './transaction-list';
import getAllTransactions from '@/actions/transaction/getAll';

type TransactionsPageProps = {
	searchParams: Promise<FilterSearchParams>;
};

export default async function Transactions({ searchParams }: TransactionsPageProps) {
	const { monthDate } = await searchParams;

	const transactionQuery = getAllTransactions({ monthDate: monthDate, count: 20 });

	return (
		<>
			<header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
				<SidebarTrigger className='-ml-1' />
				<Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className='hidden md:block'>
							<BreadcrumbLink href='/'>Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className='hidden md:block' />
						<BreadcrumbItem>
							<BreadcrumbPage>All Transactions</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</header>
			<main>
				<div>
					<Filters />
					<section className='px-4 sm:px-12 bg-gray-50 dark:bg-gray-900'>
						<div className='mb-4'>
							<h4 className='text-lg font-bold'>{Format.date(monthDate || new Date()).dateDay}</h4>
						</div>
						<TransactionList initialTransactionQuery={transactionQuery} />
					</section>
				</div>
			</main>
		</>
	);
}
