import { type Transaction } from '@/lib/graphql/schema/operations';
import { StoreIcon } from 'lucide-react';
import React from 'react';

type TransactionCardProps = {
	transaction: Transaction;
};

export default function TransactionCard({ transaction }: TransactionCardProps) {
	return (
		<div>
			<div className='bg-[#EDF4F7] p-4 rounded-2xl'>
				<StoreIcon height={32} width={32} />
			</div>
			<div>
				<h5>{transaction.title}</h5>
				<p className='text-xs'>
					{transaction.date.toLocaleString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					})}
				</p>
			</div>
		</div>
	);
}
