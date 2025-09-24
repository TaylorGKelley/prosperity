import MonthFilter from '@/components/month-filter';
import { Button } from '@/components/ui/button';
import CategoryIcon, {
	type CategoryColorKey,
	type CategoryIconKey,
} from '@/components/ui/category-icon';
import Navbar from '@/components/ui/navbar';
import { Separator } from '@/components/ui/separator';
import Format from '@/utils/Format';
import { EllipsisIcon, LinkIcon, PiggyBankIcon, PlusIcon } from 'lucide-react';

const accounts = [
	{
		title: 'Spending',
		icon: 'banknote',
		color: 'purple',
		amount: 5430.0,
	},
	{ title: 'Savings', icon: 'piggy-bank', color: 'blue', amount: 35000 },
] satisfies { title: string; icon: CategoryIconKey; color: CategoryColorKey; amount: number }[];

const budgets = [
	{
		title: 'Home',
		monthlyAmount: 3500,
		icon: 'wallet',
		color: 'amber',
	},
	{
		title: 'Business',
		monthlyAmount: 4000,
		icon: 'wallet',
		color: 'green',
	},
] satisfies {
	title: string;
	monthlyAmount: number;
	icon: CategoryIconKey;
	color: CategoryColorKey;
}[];

export default function Budget() {
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

					{/* Categories Section */}
					<div className='flex items-center justify-between w-full'>
						<p className='font-semibold text-xl'>Categories</p>
						<div className='flex gap-8 items-center '>
							<p className='font-medium text-gray-500'>Total Budget: $3500</p>
						</div>
					</div>
					<div className='bg-white rounded-2xl shadow flex gap-4 px-8 py-6'>
						<CategoryIcon icon='beef' color='green' />
						<div className='flex flex-col gap-2 w-full'>
							<div className='flex items-center justify-between w-full'>
								<p className='font-semibold text-xl'>Food</p>
								<div className='flex gap-6 items-center'>
									<p className='font-semibold text-right'>
										<span className='font-medium text-sm'>$349.00 / </span>
										<span>$800.00</span>
									</p>
									<EllipsisIcon className='size-5 text-gray-600' />
								</div>
							</div>
							<div className='flex gap-4 items-center w-full'>
								<p className='font-normal text-sm text-gray-500 text-nowrap'>64% used</p>
								<div className='grid-cols-1 grid-rows-1 grid w-full rounded-full shadow-sm'>
									<div className='col-start-1 row-start-1 bg-green-100 h-1.5 rounded-full' />
									<div className='col-start-1 row-start-1 bg-green-500 h-1.5 rounded-full w-[70%]' />
								</div>
							</div>
						</div>
					</div>

					<Button
						variant='outline'
						className='flex gap-2 items-center justify-center px-4 py-3 w-full rounded-xl border bg-gray-100 hover:bg-gray-300/10 transition-colors cursor-pointer'>
						<PlusIcon className='size-5' />
						<p className='font-normal'>Add Category</p>
					</Button>

					{/* Saving Goals Section */}
					<div className='flex items-center w-full'>
						<p className='font-semibold text-xl'>Saving Goals</p>
					</div>
					<div className='bg-white rounded-2xl shadow flex gap-4 px-8 py-6'>
						<CategoryIcon icon='ice-cream-cone' color='blue' />
						<div className='flex flex-col gap-2 items-start w-full'>
							<div className='flex items-center justify-between w-full'>
								<div className='flex gap-2 items-center'>
									<p className='font-semibold text-xl'>Dessert Fund</p>
									<p className='font-medium text-xs text-gray-700'>Till June 2026</p>
								</div>
								<div className='flex gap-6 items-center'>
									<p className='font-semibold text-right'>
										<span className='font-medium text-xs text-gray-700'>$250 / </span>
										<span>$500 </span>
									</p>
									<EllipsisIcon className='size-5 text-gray-600' />
								</div>
							</div>
							<div className='flex gap-4 items-center w-full'>
								<p className='font-normal text-sm text-gray-500 text-nowrap'>$25 / month</p>
								<div className='grid-cols-1 grid-rows-1 grid w-full rounded-full shadow-sm'>
									<div className='col-start-1 row-start-1 bg-blue-100 h-1.5 rounded-full' />
									<div className='col-start-1 row-start-1 bg-blue-500 h-1.5 rounded-full w-[70%]' />
								</div>
							</div>
						</div>
					</div>
					<Button
						variant='outline'
						className='flex gap-2 items-center justify-center px-4 py-3 w-full rounded-xl border bg-gray-100 hover:bg-gray-300/10 transition-colors cursor-pointer'>
						<PiggyBankIcon className='size-5' />
						<p className='font-normal'>Add Savings Goal</p>
					</Button>
				</main>
			</div>

			<aside className='flex flex-col gap-18 bg-white p-12'>
				<section className='flex justify-end'>
					<div className='w-12 h-12 rounded-lg shadow bg-gray-500'>{/* Profile Photo */}</div>
				</section>
				<section className='flex flex-col gap-9'>
					<h3 className='text-2xl font-semibold'>Wallets</h3>
					<ul className='flex flex-col gap-9'>
						{accounts.map((account) => (
							<li key={account.title} className='flex gap-5 items-center'>
								<CategoryIcon icon={account.icon} color={account.color} />
								<div>
									<h4 className='text-xl font-semibold'>{account.title}</h4>
									<p>{Format.price(account.amount)}</p>
								</div>
							</li>
						))}
						<li>
							<Button
								variant='default'
								className='bg-amber-600 hover:bg-amber-700 w-full cursor-pointer text-amber-50'>
								<LinkIcon /> <span>Link Account</span>
							</Button>
						</li>
					</ul>
				</section>
				<Separator className='bg-gray-400' />
				<section className='flex flex-col gap-9'>
					<h3 className='text-2xl font-semibold'>Categories</h3>
					<ul className='flex flex-col gap-9'>
						{budgets.map((budget) => (
							<li key={budget.title} className='grid grid-cols-[auto_1fr_auto] gap-5 items-center'>
								<CategoryIcon icon={budget.icon} color={budget.color} />
								<div>
									<h4 className='text-xl font-semibold'>{budget.title}</h4>
									<p>{`${Format.price(budget.monthlyAmount)}/month`}</p>
								</div>
							</li>
						))}
						<li>
							<Button
								variant='default'
								className='bg-amber-600 hover:bg-amber-700 w-full cursor-pointer text-amber-50'>
								<PlusIcon /> <span>Add Budget</span>
							</Button>
						</li>
					</ul>
				</section>
			</aside>
		</div>
	);
}
