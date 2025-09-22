import CategoryIcon, {
	type CategoryColorKey,
	type CategoryIconKey,
} from '@/components/ui/category-icon';
import Navbar from '@/components/ui/navbar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Format from '@/utils/Format';
import MonthFilter from '@/components/month-filter';
import { MoreHorizontalIcon, PlusIcon, TrendingUpIcon } from 'lucide-react';

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
					<section className='flex justify-between items-center'>
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
					<div className='content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full'>
						<p className='font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre'>
							Pending
						</p>
						<div className='content-stretch flex font-medium gap-[32px] items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-500 text-nowrap text-right whitespace-pre'>
							<p className='relative shrink-0'>Number of transactions: 20</p>
							<p className='relative shrink-0'>Value: $2018.00</p>
						</div>
					</div>

					{/* Pending Transaction Cards */}
					<div className='content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full'>
						{/* Walmart Transaction */}
						<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
							<div className='flex flex-row items-center overflow-clip relative size-full'>
								<div className='box-border content-stretch flex items-center justify-between p-[32px] relative w-full'>
									<div className='content-stretch flex gap-[16px] items-center relative shrink-0'>
										<CategoryIcon icon='shopping-cart' color='emerald' />
										<div className='content-stretch flex flex-col items-start justify-center not-italic overflow-clip relative shrink-0 text-nowrap text-right whitespace-pre'>
											<p className='font-semibold leading-[28px] relative shrink-0 text-[20px] text-black'>
												Walmart
											</p>
											<p className='font-normal leading-[normal] relative shrink-0 text-[#555555] text-[16px]'>
												August 20 2025
											</p>
										</div>
									</div>
									<div className='content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0'>
										<p className='font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-nowrap text-right whitespace-pre'>
											-$76.40
										</p>
										<MoreHorizontalIcon className='size-[24px] text-gray-600' />
									</div>
								</div>
							</div>
						</div>

						{/* Amazon Transaction */}
						<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
							<div className='flex flex-row items-center overflow-clip relative size-full'>
								<div className='box-border content-stretch flex items-center justify-between p-[32px] relative w-full'>
									<div className='content-stretch flex gap-[16px] items-center relative shrink-0'>
										<CategoryIcon icon='banknote' color='blue' />
										<div className='content-stretch flex flex-col items-start justify-center leading-[normal] not-italic overflow-clip relative shrink-0 text-nowrap text-right whitespace-pre'>
											<p className='font-semibold relative shrink-0 text-[20px] text-black tracking-[-0.2px]'>
												Amazon
											</p>
											<p className='font-normal relative shrink-0 text-[#555555] text-[16px]'>
												August 20 2025
											</p>
										</div>
									</div>
									<div className='content-stretch flex gap-[32px] items-center relative shrink-0'>
										<p className='font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-nowrap text-right whitespace-pre'>
											-$99.00
										</p>
										<MoreHorizontalIcon className='size-[24px] text-gray-600' />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* August 2025 Section */}
					<div className='content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full'>
						<p className='font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre'>
							August 2025
						</p>
					</div>

					{/* August Transaction Cards */}
					<div className='content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full'>
						{/* Aldi Transaction */}
						<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
							<div className='flex flex-row items-center overflow-clip relative size-full'>
								<div className='box-border content-stretch flex items-center justify-between p-[32px] relative w-full'>
									<div className='content-stretch flex gap-[16px] items-center relative shrink-0'>
										<CategoryIcon color='emerald' icon='shopping-cart' />
										<div className='content-stretch flex flex-col items-start justify-center leading-[normal] not-italic overflow-clip relative shrink-0 text-nowrap text-right whitespace-pre'>
											<p className='font-semibold relative shrink-0 text-[20px] text-black tracking-[-0.2px]'>
												Aldi
											</p>
											<p className='font-normal relative shrink-0 text-[#555555] text-[16px]'>
												August 19 2025
											</p>
										</div>
									</div>
									<div className='content-stretch flex gap-[32px] items-center relative shrink-0'>
										<p className='font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-nowrap text-right whitespace-pre'>
											-$54.37
										</p>
										<MoreHorizontalIcon className='size-[24px] text-gray-600' />
									</div>
								</div>
							</div>
						</div>

						{/* Water Bill Transaction */}
						<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
							<div className='flex flex-row items-center overflow-clip relative size-full'>
								<div className='box-border content-stretch flex items-center justify-between p-[32px] relative w-full'>
									<div className='content-stretch flex gap-[16px] items-center relative shrink-0'>
										<CategoryIcon icon='receipt-text' color='amber' />
										<div className='content-stretch flex flex-col items-start justify-center leading-[normal] not-italic overflow-clip relative shrink-0 text-nowrap text-right whitespace-pre'>
											<p className='font-semibold relative shrink-0 text-[20px] text-black tracking-[-0.2px]'>
												Water Bill
											</p>
											<p className='font-normal relative shrink-0 text-[#555555] text-[16px]'>
												August 17 2025
											</p>
										</div>
									</div>
									<div className='content-stretch flex gap-[32px] items-center relative shrink-0'>
										<p className='font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-nowrap text-right whitespace-pre'>
											-$40.20
										</p>
										<MoreHorizontalIcon className='size-[24px] text-gray-600' />
									</div>
								</div>
							</div>
						</div>

						{/* Paycheck Transaction */}
						<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
							<div className='flex flex-row items-center overflow-clip relative size-full'>
								<div className='box-border content-stretch flex items-center justify-between p-[32px] relative w-full'>
									<div className='content-stretch flex gap-[16px] items-center relative shrink-0'>
										<div className='bg-gray-100 overflow-clip relative rounded-[8.727px] shadow-[0px_1.091px_3.273px_0px_rgba(0,0,0,0.1),0px_1.091px_2.182px_0px_rgba(0,0,0,0.06)] shrink-0 size-[48px] flex items-center justify-center'>
											<TrendingUpIcon className='size-[26px] text-gray-600' />
										</div>
										<div className='content-stretch flex flex-col items-start justify-center leading-[normal] not-italic overflow-clip relative shrink-0 text-nowrap text-right whitespace-pre'>
											<p className='font-semibold relative shrink-0 text-[20px] text-black tracking-[-0.2px]'>
												Paycheck from company
											</p>
											<p className='font-normal relative shrink-0 text-[#555555] text-[16px]'>
												August 15 2025
											</p>
										</div>
									</div>
									<div className='content-stretch flex gap-[32px] items-center relative shrink-0'>
										<p className='font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-emerald-600 text-nowrap text-right whitespace-pre'>
											+$109.20
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
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
