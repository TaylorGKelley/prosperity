export default async function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='grid grid-cols-[auto_var(--container-xs)] bg-gray-100 min-h-screen'>
			<div className=''>
				<header>logo, navbar</header>
				<main>{children}</main>
			</div>
			<aside className='grid bg-white'>Sidebar</aside>
		</div>
	);
}
