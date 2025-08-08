import TransactionCard from '@/components/TransactionCard';
import { createGraphClient } from '@/lib/graphql';
import { GET_TRANSACTIONS } from '@/lib/graphql/queries/transactions';
import {
	type TransactionsQuery,
	type TransactionsQueryVariables,
} from '@/lib/graphql/schema/operations';
import Link from 'next/link';

export default async function Home() {
	const graphClient = await createGraphClient();
	const { data } = await graphClient.query<TransactionsQuery, TransactionsQueryVariables>({
		query: GET_TRANSACTIONS,
	});

	return (
		<main className='p-4'>
			<section className=''>
				<div className='flex items-center justify-between gap-2'>
					<h5 className='font-semibold'>Transactions</h5>
					<Link href='/transactions' className='font-normal text-xs underline cursor-pointer'>
						See All
					</Link>
				</div>
				<div className='flex justify-between items-center max-w-sm'>
					{data.transactions.map((transaction) => (
						<TransactionCard key={transaction.id} transaction={transaction} />
					))}
				</div>
			</section>
		</main>
	);
}
