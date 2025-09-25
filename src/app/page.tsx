'use client';
// TODO: Move charts to client components and use server page

import MonthFilter from '@/components/month-filter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CategoryIcon, {
	type CategoryColorKey,
	type CategoryIconKey,
} from '@/components/ui/category-icon';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import DonutProgressChart from '@/components/ui/donut-progress-chart';
import Navbar from '@/components/ui/navbar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Cookies from '@/utils/Cookies';
import Format from '@/utils/Format';
import {
	CheckIcon,
	ChevronsUpDownIcon,
	PlusIcon,
	TrendingDownIcon,
	TrendingUpIcon,
} from 'lucide-react';
// import { cookies } from 'next/headers';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

// ! Mock Data
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
] satisfies { color: string; icon: string; title: string; amount: number }[];
const monthExpenses = [
	{ month: 'Apr', spent: 700, income: 900 },
	{ month: 'May', spent: 900, income: 850 },
	{ month: 'Jun', spent: 400, income: 700 },
	{ month: 'Jul', spent: 300, income: 700 },
	{ month: 'Aug', spent: 500, income: 850 },
	{ month: 'Sep', spent: 600, income: 700 },
] satisfies { month: string; spent: number; income: number }[];

export default function Home() {
	// const cookieStore = cookies();
	// const selectedBudget: string | undefined = await cookieStore.get('selectedBudget')?.value;

	return (
		<div className='grid grid-cols-[auto_var(--container-sm)] bg-gray-100 min-h-screen'>
			<div className='px-12'>
				<Navbar />
				<main className='px-10 flex flex-col gap-6'>
					<section className='flex justify-between items-center py-2'>
						<div className='flex gap-6'>
							<CategoryIcon icon='wallet' color='amber' className='size-14' />
							<div>
								<Popover>
									<PopoverTrigger className='cursor-pointer'>
										<h2 className='text-2xl font-bold inline-flex items-center gap-2'>
											<span>Home Budget</span>
											<ChevronsUpDownIcon className='size-5' />
										</h2>
									</PopoverTrigger>
									<PopoverContent className='rounded-2xl'>
										<h5 className='text-lg font-semibold mb-2 ml-2'>Change Budget</h5>
										<Separator />
										<ul className='grid gap-2 py-2'>
											<li>
												<Button
													variant='ghost'
													className='w-full h-min flex justify-start gap-4 cursor-pointer p-2'
													onClick={() =>
														// Cookies.set('selectedBudget', budget.id)
														Cookies.set('selectedBudget', 'home')
													}>
													<CategoryIcon icon='wallet' color='amber' />
													<span className='text-lg grow text-left'>Home</span>
													<CheckIcon />
												</Button>
											</li>
											<li>
												<Button
													variant='ghost'
													className='w-full h-min flex justify-start gap-4 cursor-pointer p-2'
													onClick={() =>
														// Cookies.set('selectedBudget', budget.id)
														Cookies.set('selectedBudget', 'business')
													}>
													<CategoryIcon icon='wallet' color='green' />
													<span className='text-lg grow text-left'>Business</span>
												</Button>
											</li>
										</ul>
									</PopoverContent>
								</Popover>
								<p className='text-gray-500'>Change default budget</p>
							</div>
						</div>
						<MonthFilter />
					</section>
					<Card className='shadow rounded-2xl py-12 border-none'>
						<CardContent className='grid grid-cols-3 gap-6 px-12'>
							<div className='col-span-2 flex flex-col gap-8'>
								<ul className='grid grid-cols-3 gap-4'>
									<li className='flex flex-col gap-4'>
										<div className='flex items-center justify-center rounded-2xl shadow bg-gray-100 size-12'>
											<TrendingDownIcon className='size-6 text-red-500' />
										</div>
										<div>
											<h4 className='text-xl font-semibold'>- $2,300</h4>
											<p className='text-red-500'>Expenses</p>
										</div>
									</li>
									<li className='flex flex-col gap-4'>
										<div className='flex items-center justify-center rounded-2xl shadow bg-gray-100 size-12'>
											<TrendingUpIcon className='size-6 text-blue-500' />
										</div>
										<div>
											<h4 className='text-xl font-semibold'>$1,700</h4>
											<p className='text-blue-500'>Difference</p>
										</div>
									</li>
									<li className='flex flex-col gap-4'>
										<div className='flex items-center justify-center rounded-2xl shadow bg-gray-100 size-12'>
											<TrendingUpIcon className='size-6 text-green-500' />
										</div>
										<div>
											<h4 className='text-xl font-semibold'>$4,000</h4>
											<p className='text-green-500'>Income</p>
										</div>
									</li>
								</ul>
								<div>
									<ChartContainer
										config={{
											spent: {
												label: 'Spent',
												color: 'var(--color-blue-500)',
											},
											income: {
												label: 'Income',
												color: 'var(--color-blue-100)',
											},
										}}
										className='w-full h-28 min-h-48'>
										<BarChart accessibilityLayer data={monthExpenses}>
											{/* <CartesianGrid vertical={false} /> */}
											<XAxis
												dataKey='month'
												tickLine={false}
												tickMargin={10}
												// axisLine={false}
												axisLine={{ strokeWidth: 0.5, className: 'mt-3' }}
												tickFormatter={(value) => value.slice(0, 3)}
											/>
											<YAxis
												tickLine={false}
												axisLine={false}
												tickFormatter={(value: number) => `${value / 1000}k`}
												padding={{ bottom: 4 }}
											/>
											<ChartTooltip
												cursor={false}
												content={<ChartTooltipContent indicator='dashed' />}
											/>
											<Bar dataKey='income' fill='var(--color-blue-100)' radius={6} barSize={16} />
											<Bar dataKey='spent' fill='var(--color-blue-500)' radius={6} barSize={16} />
										</BarChart>
									</ChartContainer>
								</div>
							</div>
							<div className=''>
								<h3 className='text-xl font-semibold'>Budget</h3>
								<DonutProgressChart percentage='75%' />
								<div className='grid grid-cols-2 gap-4'>
									<div>
										<h5 className='font-semibold'>$3,000</h5>
										<p className='text-gray-500 text-xs'>Total Budget</p>
									</div>
									<div>
										<h5 className='font-semibold'>$699.10</h5>
										<p className='text-gray-500 text-xs'>Remaining</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
					<section className='grid lg:grid-cols-2 gap-8'>
						<div className='flex flex-col gap-4'>
							<h3 className='text-lg font-semibold'>Saving Goals</h3>
							<Card className='border-none shadow rounded-2xl py-6'>
								<CardContent className='flex flex-col gap-4 px-6'>
									<div className='flex items-center gap-2'>
										<CategoryIcon icon='ice-cream-cone' color='blue' className='size-8' />
										<h4 className='font-medium text-lg grow'>Dessert Fund</h4>
										<p className='text-sm text-gray-500'>$25 / month</p>
									</div>
									<div className='flex flex-col gap-1'>
										<p className='text-sm text-gray-500 font-medium'>$250 / $500</p>
										<div className='grid-cols-1 grid-rows-1 grid w-full rounded-full shadow-sm'>
											<div className='col-start-1 row-start-1 bg-blue-100 h-2 rounded-full' />
											<div className='col-start-1 row-start-1 bg-blue-500 h-2 rounded-full w-[70%]' />
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
						<div className='flex flex-col gap-4'>
							<h3 className='text-lg font-semibold'>Trends</h3>
							<div className='flex flex-wrap gap-6'>
								<Card className='border-none shadow rounded-2xl py-5'>
									<CardContent className='flex flex-col gap-4 px-6'>
										<div className='flex items-center gap-4'>
											<CategoryIcon icon='beef' color='green' />
											<div>
												<h5 className='font-medium'>Food</h5>
												<p className='inline-flex gap-1.5 items-center'>
													<span className='text-2xl'>$240</span>
													<span className='text-xs text-red-500'>+10%</span>
												</p>
											</div>
										</div>
										<div className='grid grid-cols-2 gap-4'>
											<div>
												<h5 className='text-xs text-gray-500'>Last Month</h5>
												<p>$640</p>
											</div>
											<div>
												<h5 className='text-xs text-gray-500'>Average YTD</h5>
												<p>$680</p>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card className='border-none shadow rounded-2xl py-5'>
									<CardContent className='flex flex-col gap-4 px-6'>
										<div className='flex items-center gap-4'>
											<CategoryIcon icon='fuel' color='pink' />
											<div>
												<h5 className='font-medium'>Gas</h5>
												<p className='inline-flex gap-1.5 items-center'>
													<span className='text-2xl'>$240</span>
													<span className='text-xs text-green-500'>-40%</span>
												</p>
											</div>
										</div>
										<div className='grid grid-cols-2 gap-4'>
											<div>
												<h5 className='text-xs text-gray-500'>Last Month</h5>
												<p>$640</p>
											</div>
											<div>
												<h5 className='text-xs text-gray-500'>Average YTD</h5>
												<p>$680</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</section>
				</main>
			</div>
			<aside className='flex flex-col gap-18 bg-white p-12'>
				<section className='flex justify-end'>
					<div className='w-12 h-12 rounded-lg shadow bg-gray-500'>{/* Profile Photo */}</div>
				</section>
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
				<Separator className='bg-gray-400' />
				<section className='flex flex-col gap-9'>
					<h3 className='text-2xl font-semibold'>Quick Actions</h3>
					<ul className='grid gap-6'>
						<li>
							<Button
								variant='secondary'
								className='w-full rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200'>
								<PlusIcon /> <span>Add Cash Transaction</span>
							</Button>
						</li>
						<li>
							<Button
								variant='secondary'
								className='w-full rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200'>
								<PlusIcon /> <span>Add Savings Goal</span>
							</Button>
						</li>
					</ul>
				</section>
			</aside>
		</div>
	);
}
