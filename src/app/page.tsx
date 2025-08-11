import TransactionCard from '@/components/TransactionCard';
import { createGraphClient } from '@/lib/graphql';
import { GET_TRANSACTIONS_WITH_LIMIT_OFFSET } from '@/lib/graphql/queries/transactions';
import {
	type TransactionsWithLimitOffsetQuery,
	type TransactionsWithLimitOffsetQueryVariables,
} from '@/lib/graphql/schema/operations';
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
		<main className='p-4'>
			<section className=''>
				<div className='flex items-center justify-between gap-2 mb-4'>
					<h5 className='font-semibold'>Transactions</h5>
					<Link href='/transactions' className='font-normal text-xs underline cursor-pointer'>
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
