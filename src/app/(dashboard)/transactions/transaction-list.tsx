'use client';

import getAllTransactions from '@/actions/transaction/getAll';
import { Button } from '@/components/ui/button';
import {
	type PageInformation,
	type GetTransactionsWithPaginationQuery,
} from '@/lib/graphql/schema/operations';
import Cursor from '@/lib/graphql/utils/Cursor';
import Format from '@/utils/Format';
import React, { use, useState } from 'react';

type TransactionListProps = {
	initialTransactionQuery: Promise<GetTransactionsWithPaginationQuery['transactions']>;
};

export default function TransactionList({ initialTransactionQuery }: TransactionListProps) {
	const data = use(initialTransactionQuery);

	const [isPending, setIsPending] = useState<boolean>(false);
	const [nextCursor, setNextCursor] = useState<PageInformation | null>(data.pageInfo || null);

	const handleClick = async () => {
		const result = await getAllTransactions({
			count: 20,
			cursor: nextCursor?.hasNextPage ? Cursor.decode(nextCursor.endCursor!) : undefined,
		});
	};

	return (
		<ul className='grid gap-6 pb-8'>
			{data.items.map((transaction) => (
				<li
					key={transaction.id}
					className='bg-white dark:bg-gray-950 dark:border-gray-500 dark:border shadow-sm py-6 sm:px-8 px-4 rounded-xl flex gap-4 items-center'>
					<div className='rounded-md bg-blue-100 size-10'>O</div>
					<div className='grid'>
						<h5>{transaction.description}</h5>
						<p className='opacity-75 text-sm'>{Format.date(transaction.date).dateOnly}</p>
					</div>
					<p className='font-bold text-lg text-right flex-grow'>{transaction.amount}</p>
				</li>
			))}
			<li className='flex justify-center'>
				<Button variant='default' onClick={handleClick}>
					Load More...
				</Button>
			</li>
		</ul>
	);
}
