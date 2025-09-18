import { CalendarIcon, ChevronDownIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function MonthFilter() {
	return (
		<Popover>
			<PopoverTrigger>
				<div className='bg-white grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-lg shadow'>
					<CalendarIcon className='size-4' />
					<p>August 2025</p>
					<ChevronDownIcon className='size-4' />
				</div>
			</PopoverTrigger>
			<PopoverContent className='bg-white'>
				<p>Dates</p>
			</PopoverContent>
		</Popover>
	);
}
