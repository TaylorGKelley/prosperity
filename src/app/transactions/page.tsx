import CategoryIcon from '@/components/ui/category-icon';
import Navbar from '@/components/ui/navbar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Format from '@/utils/Format';
import { PlusIcon } from 'lucide-react';

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
				<main></main>
			</div>
			<aside className='flex flex-col gap-18 bg-white p-12'>
				<section className='flex justify-end'>
					<div className='w-12 h-12 rounded-lg shadow bg-gray-500'>{/* Profile Photo */}</div>
				</section>
				<section className='flex flex-col gap-9'>
					<div className='flex justify-between items-center'>
						<h3 className='text-2xl font-semibold'>Wallets</h3>
						<button className='p-[7px] rounded-lg border-dashed border-gray-400 border cursor-pointer'>
							<PlusIcon className='size-4 text-gray-400' />
						</button>
					</div>
					<ul className='flex flex-col gap-9'>
						{wallets.map((wallet) => (
							<li key={wallet.title} className='flex gap-5 items-center'>
								<CategoryIcon icon={wallet.icon} color={wallet.color} />
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
					<div className='flex justify-between items-center'>
						<h3 className='text-2xl font-semibold'>Categories</h3>
						<button className='p-[7px] rounded-lg border-dashed border-gray-400 border cursor-pointer'>
							<PlusIcon className='size-4 text-gray-400' />
						</button>
					</div>
					<ul className='flex flex-col gap-9'>
						{categories.map((category) => (
							<li
								key={category.title}
								className='grid grid-cols-[auto_1fr_auto] gap-5 items-center'>
								<CategoryIcon icon={category.icon} color={category.color} />
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
