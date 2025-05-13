import { OrderItem } from "../entities/OrderItem"
import { Skeleton } from "../ui/skeleton"

import { IOrder } from "@/types"

type Props = { orders: IOrder[]; isLoading: boolean }

export const OrdersList = ({ orders, isLoading }: Props) => {
	return (
		<div className=' overflow-x-auto w-full  flex md:flex-col gap-4 mt-4 overflow-hidden'>
			<div className='flex sm:w-full flex-col md:flex-row md:items-center justify-between font-sans text-[#6f6f6e] opacity-80 '>
				<p className='flex-1 leading-[50px] md:leading-4'>Products</p>
				<p className='flex-1 leading-[50px] md:leading-4'>Order ID</p>
				<p className='flex-1 leading-[50px] md:leading-4'>Date</p>
				<p className='flex-1 leading-[50px] md:leading-4'>
					Customer Name
				</p>
				<p className='flex-1 leading-[50px] md:leading-4'>Status</p>
				<p className='flex-1 leading-[50px] md:leading-4'>Amount</p>
			</div>
			<div className='flex-1 flex flex-row md:flex-col gap-3'>
				{isLoading
					? [...new Array(5)].map((_, index) => (
							<Skeleton
								key={index}
								className='w-full h-12 bg-dark-gray/30'
							/>
						))
					: orders.map(order => (
							<OrderItem key={order.id} order={order} />
						))}
			</div>
		</div>
	)
}
