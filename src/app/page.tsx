import Link from 'next/link';

export default function Home() {
	return (
		<main className='p-4'>
			<Link
				href='/auth/login'
				className='underline, px-4 py-2 border rounded-full hover:bg-gray-800 border-gray-600'>
				Login
			</Link>
		</main>
	);
}
