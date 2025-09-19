'use client';

import { CalendarIcon, ChevronDownIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import useSearchParams from '@/hooks/useSearchParams';
import Format from '@/utils/Format';

export default function MonthFilter() {
	const searchParams = useSearchParams();
	const { year, month } = { year: searchParams.get('year'), month: searchParams.get('month') };

	const today = new Date();
	const selectedDate =
		year && month
			? new Date(
					parseInt(year),
					parseInt((month && parseInt(month) - 1)?.toString() || today.getMonth().toString()),
					1,
			  )
			: undefined;

	const yearItems = [];
	for (let i = today.getFullYear() - 100; i < today.getFullYear() + 50; i++) {
		yearItems.push(
			<SelectItem key={i} value={i.toString()} className='hover:bg-gray-500/50'>
				{i}
			</SelectItem>,
		);
	}

	return (
		<Popover>
			<PopoverTrigger>
				<div className='bg-white grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-lg shadow'>
					<CalendarIcon className='size-4' />
					<p>{Format.date(selectedDate || today).dateMonth}</p>
					<ChevronDownIcon className='size-4' />
				</div>
			</PopoverTrigger>
			<PopoverContent className='bg-white grid grid-cols-2 gap-4 border-gray-400 pt-2'>
				<div>
					<label className='text-xs text-gray-500'>Month:</label>
					<Select
						onValueChange={(value) => {
							if (!searchParams.get('year'))
								searchParams.set('year', today.getFullYear().toString());
							searchParams.set('month', value);
						}}
						defaultValue={
							selectedDate
								? (selectedDate.getMonth() - 1).toString()
								: (today.getMonth() - 1).toString()
						}>
						<SelectTrigger className='w-full border-gray-400'>
							<SelectValue placeholder='Month' />
						</SelectTrigger>
						<SelectContent className='bg-white'>
							<SelectItem value='1'>Jan</SelectItem>
							<SelectItem value='2'>Fab</SelectItem>
							<SelectItem value='3'>Mar</SelectItem>
							<SelectItem value='4'>Apr</SelectItem>
							<SelectItem value='5'>May</SelectItem>
							<SelectItem value='6'>Jun</SelectItem>
							<SelectItem value='7'>Jul</SelectItem>
							<SelectItem value='8'>Aug</SelectItem>
							<SelectItem value='9'>Sep</SelectItem>
							<SelectItem value='10'>Oct</SelectItem>
							<SelectItem value='11'>Nov</SelectItem>
							<SelectItem value='12'>Dec</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<label className='text-xs text-gray-500'>Year:</label>
					<Select
						onValueChange={(value) => {
							searchParams.set('year', value);
							if (searchParams.get('month')) searchParams.set('month', today.getMonth().toString());
						}}
						defaultValue={
							selectedDate ? selectedDate.getFullYear().toString() : today.getFullYear().toString()
						}>
						<SelectTrigger className='w-full border-gray-400'>
							<SelectValue placeholder='Year' />
						</SelectTrigger>
						<SelectContent className='bg-white'>{yearItems}</SelectContent>
					</Select>
				</div>
			</PopoverContent>
		</Popover>
	);
}
