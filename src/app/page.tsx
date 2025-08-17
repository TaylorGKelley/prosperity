import TransactionCard from '@/components/TransactionCard';
import { createGraphClient } from '@/lib/graphql';
import { GET_TRANSACTIONS_WITH_LIMIT_OFFSET } from '@/lib/graphql/queries/transactions';
import {
	type TransactionsWithLimitOffsetQuery,
	type TransactionsWithLimitOffsetQueryVariables,
} from '@/lib/graphql/schema/operations';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
	const graphClient = await createGraphClient();
	const { data } = await graphClient.query<
		TransactionsWithLimitOffsetQuery,
		TransactionsWithLimitOffsetQueryVariables
	>({
		query: GET_TRANSACTIONS_WITH_LIMIT_OFFSET,
		variables: {
			monthDate: new Date(),
			limit: 5,
			offset: 0,
		},
	});

	return (
		<main className='p-4 grid grid-cols-2 max-sm:grid-cols-1 gap-8'>
			<section className='bg-white rounded-2xl px-6 py-4'>
				<div className='flex justify-between items-center mb-6'>
					<h3 className='text-xl font-semibold'>Accounts</h3>
					<Link
						href='/wallet/link-account'
						className='text-sm underline font-normal flex items-center gap-2'>
						<div className='border border-black rounded-full aspect-square'>
							<PlusIcon className='w-4 h-4' />
						</div>
						<span>Add Account</span>
					</Link>
				</div>
				<div></div>
			</section>
			<section>
				<div>
					<h4>Monthly Spending</h4>
					<p>1 Mar - 15 Mar, 2025</p>
				</div>
				<div>{/* Chart */}</div>
			</section>
			<section className=''>
				<div className='flex items-center justify-between gap-2 mb-4'>
					<h5 className='font-semibold'>Transactions</h5>
					<Link
						href='/transactions'
						className='font-normal text-xs underline cursor-pointer opacity-75'>
						See All
					</Link>
				</div>
				<div className='flex flex-col gap-4'>
					{data.transactions.map((transaction) => (
						<TransactionCard key={transaction.id} transaction={transaction} />
					))}
				</div>
			</section>
		</main>
	);
}
