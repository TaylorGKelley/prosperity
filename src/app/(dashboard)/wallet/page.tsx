import LinkAccountForm from '@/components/forms/LinkAccountForm';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

export default function Wallet() {
	return (
		<>
			<header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
				<SidebarTrigger className='-ml-1' />
				<Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbPage>Wallet</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</header>
			<div className='flex flex-1 flex-col gap-4 p-4'>
				<div className='flex gap-6 items-center'>
					<h2>Wallet</h2>
					<p>Link New Account</p>
					<LinkAccountForm />
				</div>
			</div>
		</>
	);
}
