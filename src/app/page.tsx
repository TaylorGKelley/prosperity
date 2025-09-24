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
import Format from '@/utils/Format';
import { ChevronsUpDownIcon, PlusIcon, TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

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
	{ month: 'Jan', spent: 500, income: 800 },
	{ month: 'Feb', spent: 800, income: 700 },
	{ month: 'Mar', spent: 600, income: 800 },
	{ month: 'Apr', spent: 700, income: 900 },
	{ month: 'May', spent: 900, income: 850 },
	{ month: 'Jun', spent: 400, income: 700 },
	{ month: 'Jul', spent: 300, income: 700 },
	{ month: 'Aug', spent: 500, income: 850 },
	{ month: 'Sep', spent: 600, income: 700 },
	{ month: 'Oct', spent: 700, income: 900 },
	{ month: 'Nov', spent: 800, income: 1000 },
	{ month: 'Dec', spent: 900, income: 800 },
] satisfies { month: string; spent: number; income: number }[];

export default function Home() {
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
									<PopoverContent>
										<h5>Change Budget</h5>
									</PopoverContent>
								</Popover>
								<p className='text-gray-500'>Change default budget</p>
							</div>
						</div>
						<MonthFilter />
					</section>
					<Card className='bg-white shadow rounded-2xl p-6'>
						<CardContent className='grid grid-cols-3 gap-6'>
							<div className='col-span-2'>
								<ul className='grid grid-cols-3 gap-4'>
									<li>
										<div className='flex items-center justify-center rounded-2xl shadow bg-gray-100 size-12'>
											<TrendingDownIcon className='size-6 text-red-500' />
										</div>
										<h4 className='text-xl font-semibold'>- $2,300</h4>
										<p className='text-red-500'>Expenses</p>
									</li>
									<li>
										<div className='flex items-center justify-center rounded-2xl shadow bg-gray-100 size-12'>
											<TrendingUpIcon className='size-6 text-blue-500' />
										</div>
										<h4 className='text-xl font-semibold'>$1,700</h4>
										<p className='text-blue-500'>Difference</p>
									</li>
									<li>
										<div className='flex items-center justify-center rounded-2xl shadow bg-gray-100 size-12'>
											<TrendingUpIcon className='size-6 text-green-500' />
										</div>
										<h4 className='text-xl font-semibold'>$4,000</h4>
										<p className='text-green-500'>Income</p>
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
										className='w-full h-28'>
										<BarChart accessibilityLayer data={monthExpenses}>
											<CartesianGrid vertical={false} />
											<XAxis
												dataKey='month'
												tickLine={false}
												tickMargin={10}
												axisLine={false}
												tickFormatter={(value) => value.slice(0, 3)}
											/>
											<ChartTooltip
												cursor={false}
												content={<ChartTooltipContent indicator='dashed' />}
											/>
											<Bar dataKey='income' fill='var(--color-blue-100)' radius={6} width={16} />
											<Bar dataKey='spent' fill='var(--color-blue-500)' radius={6} width={16} />
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
