import Image from "next/image"

import { IMonthlyStatistics } from "@/types/statistics.interface"

export const DashboardLastSales = ({ data }: { data: IMonthlyStatistics }) => {
	// TODO: Добавить Skeletons для каждого блока
	// TODO: Сделать страницу с категориями, где выводятся продукты
	return (
		<div className='px-4 py-6 bg-white rounded-2xl flex-1/3'>
			<h5 className='font-sans text-xl'>Last Sold Products</h5>
			<div className='h-[0.5px] w-full bg-dark-gray/50 mt-4 mb-8' />
			<div className='flex flex-col gap-4'>
				{data.lastProducts.map((item, index) => (
					<div
						key={index}
						className='flex flex-wrap items-center gap-4 border-b pb-4'
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.product.images[0]}`}
							alt={item.product.title}
							width={64}
							height={64}
							className='object-cover rounded-lg'
						/>
						<div className='flex-1'>
							<h6>{item.product.title}</h6>
							<p className='text-sm opacity-60'>
								${item.product.price.toFixed(2)}
							</p>
						</div>
						<div>
							<p className='font-sans font-semibold'>
								${item.product.price * item.quantity}
							</p>
							<p className='text-sm opacity-60'>
								quantity: {item.quantity}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
