import { Menu } from 'lucide-react';
import React from 'react';

export default function TitleBar() {
	return (
		<header className='py-6 px-8 flex justify-between'>
			<h5 className='font-bold '>Prosperity</h5>
			<div>
				<Menu />
			</div>
		</header>
	);
}
