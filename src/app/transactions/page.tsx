import CategoryIcon, {
	type CategoryColorKey,
	type CategoryIconKey,
} from '@/components/ui/category-icon';
import Navbar from '@/components/ui/navbar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Format from '@/utils/Format';
import MonthFilter from '@/components/month-filter';
import { MoreHorizontalIcon } from 'lucide-react';

export default function Transactions() {
	const wallets = [
		{
			color: 'purple',
			icon: 'banknote',
			title: 'Spending',
			amount: 5280.2,
		},
		{
			color: 'blue',
			icon: 'piggy-bank',
			title: 'Savings',
			amount: 35000,
		},
	];

	const categories = [
		{
			color: 'yellow',
			icon: 'receipt-text',
			title: 'Savings',
			amount: 1000,
		},
		{
			color: 'green',
			icon: 'beef',
			title: 'Food',
			amount: 400,
		},
		{
			color: 'pink',
			icon: 'fuel',
			title: 'Gas',
			amount: 250,
		},
		{
			color: 'blue',
			icon: 'ellipsis',
			title: 'Other',
			amount: 300,
		},
	];

	return (
		<div className='grid grid-cols-[auto_var(--container-sm)] bg-gray-100 min-h-screen'>
			<div className='px-12'>
				<Navbar />
				<main className='px-10 flex flex-col gap-6'>
					<section className='flex justify-between items-center mb-4'>
						<div className='flex gap-6'>
							<CategoryIcon icon='wallet' color='amber' className='size-14' />
							<div>
								<h2 className='text-2xl font-bold'>Home Budget</h2>
								<p className='text-gray-500'>Change default budget</p>
							</div>
						</div>
						<MonthFilter />
					</section>

					{/* Pending Heading */}
					<div className='flex items-center justify-between overflow-clip relative shrink-0 w-full'>
						<p className='font-semibold text-xl'>Pending</p>
						<div className='flex font-medium gap-8 items-center text-gray-500'>
							<p>Number of transactions: 20</p>
							<p>Value: $2018.00</p>
						</div>
					</div>

					<div className='flex flex-col gap-8 w-full '>
						{/* Transaction Card */}
						<div className='bg-white rounded-2xl shadow flex items-center justify-between px-8 py-6 w-full'>
							<div className='flex gap-4 items-center'>
								<CategoryIcon icon='shopping-cart' color='emerald' />
								<div className='flex flex-col justify-center'>
									<p className='font-semibold text-xl'>Walmart</p>
									<p className='font-normal text-gray-500'>August 20 2025</p>
								</div>
							</div>
							<div className='flex gap-8 items-center'>
								<p className='font-semibold text-xl text-right'>-$76.40</p>
								<MoreHorizontalIcon className='size-6' />
							</div>
						</div>

						{/* August 2025 Section */}
						<div className='content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full'>
							<p className='font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre'>
								August 2025
							</p>
						</div>
					</div>
				</main>
			</div>
			<aside className='flex flex-col gap-18 bg-white p-12'>
				<section className='flex justify-end'>
					<div className='w-12 h-12 rounded-lg shadow bg-gray-500'>{/* Profile Photo */}</div>
				</section>
				<section className='flex flex-col gap-9'>
					<h3 className='text-2xl font-semibold'>Wallets</h3>
					<ul className='flex flex-col gap-9'>
						{wallets.map((wallet) => (
							<li key={wallet.title} className='flex gap-5 items-center'>
								<CategoryIcon
									icon={wallet.icon as CategoryIconKey}
									color={wallet.color as CategoryColorKey}
								/>
								<div>
									<h4 className='text-xl font-semibold'>{wallet.title}</h4>
									<p>{Format.price(wallet.amount)}</p>
								</div>
							</li>
						))}
					</ul>
				</section>
				<Separator className='bg-gray-400' />
				<section className='flex flex-col gap-9'>
					<h3 className='text-2xl font-semibold'>Categories</h3>
					<ul className='flex flex-col gap-9'>
						{categories.map((category) => (
							<li
								key={category.title}
								className='grid grid-cols-[auto_1fr_auto] gap-5 items-center'>
								<CategoryIcon
									icon={category.icon as CategoryIconKey}
									color={category.color as CategoryColorKey}
								/>
								<div>
									<h4 className='text-xl font-semibold'>{category.title}</h4>
									<p>{Format.price(category.amount)}</p>
								</div>
								<p
									className={cn('text-sm bg-gray-100 px-1.5 py-0.75 rounded-md', {
										'bg-red-100 text-red-500': category.amount - 500 < 0,
									})}>
									{Format.price(category.amount - 500)}
								</p>
							</li>
						))}
					</ul>
				</section>
			</aside>
		</div>
	);
}
