'use client';

import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';

export type FilterSearchParams = Partial<{
	monthDate: Date;
}>;

export default function Filters() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		router.replace(
			`${pathname}?${createQueryString('monthDate', new Date(e.target.value).toISOString())}`,
		);
	};

	return (
		<section className='flex gap-6'>
			<Input type='date' className='max-w-sm' onChange={handleChange} />
		</section>
	);
}
