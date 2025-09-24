import { Button } from '@/components/ui/button';
import CategoryIcon, {
	type CategoryColorKey,
	type CategoryIconKey,
} from '@/components/ui/category-icon';
import Navbar from '@/components/ui/navbar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Format from '@/utils/Format';
import { ChevronDownIcon, EllipsisIcon, LinkIcon, PlusIcon } from 'lucide-react';

const accounts = [
	{
		title: 'Spending',
		icon: 'banknote',
		color: 'purple',
		amount: 5430.0,
	},
	{ title: 'Savings', icon: 'piggy-bank', color: 'blue', amount: 35000 },
] satisfies { title: string; icon: CategoryIconKey; color: CategoryColorKey; amount: number }[];

const budgets = [
	{
		title: 'Home',
		monthlyAmount: 3500,
		icon: 'wallet',
		color: 'amber',
	},
	{
		title: 'Business',
		monthlyAmount: 4000,
		icon: 'wallet',
		color: 'green',
	},
] satisfies {
	title: string;
	monthlyAmount: number;
	icon: CategoryIconKey;
	color: CategoryColorKey;
}[];

export default function Budget() {
	return (
		<div className='grid grid-cols-[auto_var(--container-sm)] bg-gray-100 min-h-screen'>
			<div className='px-12'>
				<Navbar />
				<main>
					{/* Main Content */}
					<div className='basis-0 grow min-h-px min-w-px relative shrink-0 w-full'>
						<div className='overflow-clip relative size-full'>
							<div className='box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative size-full'>
								{/* Header Section with Home Budget */}
								<div className='box-border content-stretch flex items-center overflow-clip px-0 py-[8px] relative shrink-0 w-full'>
									<div className='content-stretch flex gap-[24px] items-center relative shrink-0'>
										{/* Category Icon */}
										<CategoryIcon icon='wallet' color='amber' className='size-14' />

										{/* Wallet Info */}
										<div className='content-stretch flex flex-col items-start relative shrink-0'>
											<div className='content-stretch flex gap-[8px] items-center relative shrink-0 w-full'>
												<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">
													Home Budget
												</p>
												<ChevronDownIcon className='size-[20px] text-black' />
											</div>
											<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#555555] text-[16px] w-full">
												Change default budget
											</p>
										</div>
									</div>
								</div>

								{/* Categories Section */}
								<div className='content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full'>
									<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">
										Categories
									</p>
									<div className='content-stretch flex gap-[32px] items-center relative shrink-0'>
										<p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-500 text-nowrap text-right whitespace-pre">
											Total Budget: $3500
										</p>
									</div>
								</div>

								{/* Food Category */}
								<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
									<div className='flex flex-row items-center overflow-clip relative size-full'>
										<div className='box-border content-stretch flex gap-[16px] items-center px-[32px] py-[24px] relative w-full'>
											<CategoryIcon icon='beef' color='green' />
											<div className='basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0'>
												<div className='content-stretch flex items-center justify-between relative shrink-0 w-full'>
													<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap text-right whitespace-pre">
														Food
													</p>
													<div className='content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0'>
														<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap text-right whitespace-pre">
															<span className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] text-[14px]">
																$349.00 /{' '}
															</span>
															<span className='leading-[24px] text-[16px]'>$800.00</span>
														</p>
														<EllipsisIcon className='size-[20px] text-gray-600' />
													</div>
												</div>
												<div className='content-stretch flex gap-[16px] items-center relative shrink-0 w-full'>
													<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap text-right whitespace-pre">
														64% used
													</p>
													<div className='basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0'>
														<div className='[grid-area:1_/_1] bg-green-100 h-[6px] ml-0 mt-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[697px]' />
														<div className='[grid-area:1_/_1] bg-green-500 h-[6px] ml-0 mt-0 rounded-[9999px] w-[479.188px]' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Gas Category */}
								<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
									<div className='flex flex-row items-center overflow-clip relative size-full'>
										<div className='box-border content-stretch flex gap-[16px] items-center px-[32px] py-[24px] relative w-full'>
											<CategoryIcon icon='fuel' color='pink' />
											<div className='basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0'>
												<div className='content-stretch flex items-center justify-between relative shrink-0 w-full'>
													<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap text-right whitespace-pre">
														Gas
													</p>
													<div className='content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0'>
														<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap text-right whitespace-pre">
															<span className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] text-[14px]">
																$200.00 /{' '}
															</span>
															<span className='leading-[24px] text-[16px]'>$250.00</span>
														</p>
														<EllipsisIcon className='size-[20px] text-gray-600' />
													</div>
												</div>
												<div className='content-stretch flex gap-[16px] items-center relative shrink-0 w-full'>
													<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap text-right whitespace-pre">
														80% used
													</p>
													<div className='basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0'>
														<div className='[grid-area:1_/_1] bg-pink-100 h-[6px] ml-0 mt-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[698px]' />
														<div className='[grid-area:1_/_1] bg-pink-500 h-[6px] ml-0 mt-0 rounded-[9999px] w-[558.4px]' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Bills Category */}
								<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
									<div className='flex flex-row items-center overflow-clip relative size-full'>
										<div className='box-border content-stretch flex gap-[16px] items-center px-[32px] py-[24px] relative w-full'>
											<CategoryIcon icon='receipt-text' color='amber' />
											<div className='basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0'>
												<div className='content-stretch flex items-center justify-between relative shrink-0 w-full'>
													<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap text-right whitespace-pre">
														Bills
													</p>
													<div className='content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0'>
														<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap text-right whitespace-pre">
															<span className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] text-[14px]">
																$951.28 /{' '}
															</span>
															<span className='leading-[24px] text-[16px]'>$1000.00</span>
														</p>
														<EllipsisIcon className='size-[20px] text-gray-600' />
													</div>
												</div>
												<div className='content-stretch flex gap-[16px] items-center relative shrink-0 w-full'>
													<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap text-right whitespace-pre">
														95% used
													</p>
													<div className='basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0'>
														<div className='[grid-area:1_/_1] bg-amber-100 h-[6px] ml-0 mt-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[698px]' />
														<div className='[grid-area:1_/_1] bg-amber-500 h-[6px] ml-0 mt-0 rounded-[9999px] w-[663.1px]' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Other Category */}
								<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
									<div className='flex flex-row items-center overflow-clip relative size-full'>
										<div className='box-border content-stretch flex gap-[16px] items-center px-[32px] py-[24px] relative w-full'>
											<CategoryIcon icon='ellipsis' color='blue' />
											<div className='basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0'>
												<div className='content-stretch flex items-center justify-between relative shrink-0 w-full'>
													<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap text-right whitespace-pre">
														Other
													</p>
													<div className='content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0'>
														<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap text-right whitespace-pre">
															<span className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] text-[14px]">
																$349.00 /{' '}
															</span>
															<span className='leading-[24px] text-[16px]'>$800.00</span>
														</p>
														<EllipsisIcon className='size-[20px] text-gray-600' />
													</div>
												</div>
												<div className='content-stretch flex gap-[16px] items-center relative shrink-0 w-full'>
													<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap text-right whitespace-pre">
														64% used
													</p>
													<div className='basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0'>
														<div className='[grid-area:1_/_1] bg-blue-100 h-[6px] ml-0 mt-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[697px]' />
														<div className='[grid-area:1_/_1] bg-blue-500 h-[6px] ml-0 mt-0 rounded-[9999px] w-[479.188px]' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Add Category Button */}
								<div className='relative rounded-[16px] shrink-0 w-full'>
									<div className='flex flex-row items-center justify-center overflow-clip relative size-full'>
										<div className='box-border content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[24px] relative w-full'>
											<PlusIcon className='size-[20px] text-gray-700' />
											<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-700 text-nowrap text-right whitespace-pre">
												Add Category
											</p>
										</div>
									</div>
									<div
										aria-hidden='true'
										className='absolute border border-dashed border-gray-700 inset-[-1px] pointer-events-none rounded-[17px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]'
									/>
								</div>

								{/* Saving Goals Section */}
								<div className='content-stretch flex items-center overflow-clip relative shrink-0 w-full'>
									<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">
										Saving Goals
									</p>
								</div>

								{/* Dessert Fund */}
								<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
									<div className='flex flex-row items-center overflow-clip relative size-full'>
										<div className='box-border content-stretch flex gap-[16px] items-center px-[32px] py-[24px] relative w-full'>
											<CategoryIcon icon='piggy-bank' color='blue' />
											<div className='basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0'>
												<div className='content-stretch flex items-center justify-between relative shrink-0 w-full'>
													<div className='content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-nowrap text-right whitespace-pre'>
														<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black">
															Dessert Fund
														</p>
														<p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-gray-700">
															Till June 2026
														</p>
													</div>
													<div className='content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0'>
														<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap text-right whitespace-pre">
															<span className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] text-[12px] text-gray-700">
																$250 /{' '}
															</span>
															<span className='leading-[24px] text-[16px]'>$500 </span>
														</p>
														<EllipsisIcon className='size-[20px] text-gray-600' />
													</div>
												</div>
												<div className='content-stretch flex gap-[16px] items-center relative shrink-0 w-full'>
													<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap text-right whitespace-pre">
														$25 / month
													</p>
													<div className='basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0'>
														<div className='[grid-area:1_/_1] bg-blue-100 h-[6px] ml-0 mt-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[681px]' />
														<div className='[grid-area:1_/_1] bg-blue-500 h-[6px] ml-0 mt-0 rounded-[9999px] w-[468.188px]' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* New Car Fund */}
								<div className='bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full'>
									<div className='flex flex-row items-center overflow-clip relative size-full'>
										<div className='box-border content-stretch flex gap-[16px] items-center px-[32px] py-[24px] relative w-full'>
											<CategoryIcon icon='car' color='blue' />
											<div className='basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0'>
												<div className='content-stretch flex items-center justify-between relative shrink-0 w-full'>
													<div className='content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-nowrap text-right whitespace-pre'>
														<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black">
															New Car Fund
														</p>
														<p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-gray-700">
															Till August 2037
														</p>
													</div>
													<div className='content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0'>
														<p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap text-right whitespace-pre">
															<span className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] text-[12px] text-gray-700">
																$500 /{' '}
															</span>
															<span className='leading-[24px] text-[16px]'>$10,000 </span>
														</p>
														<EllipsisIcon className='size-[20px] text-gray-600' />
													</div>
												</div>
												<div className='content-stretch flex gap-[16px] items-center relative shrink-0 w-full'>
													<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap text-right whitespace-pre">
														$50 / month
													</p>
													<div className='basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0'>
														<div className='[grid-area:1_/_1] bg-violet-100 h-[6px] ml-0 mt-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[681px]' />
														<div className='[grid-area:1_/_1] bg-violet-500 h-[6px] ml-0 mt-0 rounded-[9999px] w-[27px]' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Add Savings Goal Button */}
								<div className='relative rounded-[16px] shrink-0 w-full'>
									<div className='flex flex-row items-center justify-center overflow-clip relative size-full'>
										<div className='box-border content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[24px] relative w-full'>
											<PlusIcon className='size-[20px] text-gray-700' />
											<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-gray-700 text-nowrap text-right whitespace-pre">
												Add Savings Goal
											</p>
										</div>
									</div>
									<div
										aria-hidden='true'
										className='absolute border border-dashed border-gray-700 inset-[-1px] pointer-events-none rounded-[17px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]'
									/>
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
						{accounts.map((account) => (
							<li key={account.title} className='flex gap-5 items-center'>
								<CategoryIcon icon={account.icon} color={account.color} />
								<div>
									<h4 className='text-xl font-semibold'>{account.title}</h4>
									<p>{Format.price(account.amount)}</p>
								</div>
							</li>
						))}
						<li>
							<Button variant='default' className='w-full'>
								<LinkIcon /> <span>Link Account</span>
							</Button>
						</li>
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
						{budgets.map((budget) => (
							<li key={budget.title} className='grid grid-cols-[auto_1fr_auto] gap-5 items-center'>
								<CategoryIcon icon={budget.icon} color={budget.color} />
								<div>
									<h4 className='text-xl font-semibold'>{budget.title}</h4>
									<p>{`${Format.price(budget.monthlyAmount)}/month`}</p>
								</div>
							</li>
						))}
						<li>
							<Button variant='default' className='w-full'>
								<PlusIcon /> <span>Add Budget</span>
							</Button>
						</li>
					</ul>
				</section>
			</aside>
		</div>
	);
}
