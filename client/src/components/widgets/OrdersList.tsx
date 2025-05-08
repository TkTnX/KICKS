import { OrderItem } from "../entities/OrderItem"

import { IOrder } from "@/types"

export const OrdersList = ({ orders }: { orders: IOrder[] }) => {
	// TODO: Добавить breadcrumbs и верхнюю часть страницы
	return (
		<div className='w-full flex flex-col gap-4 mt-4'>
			<div className='flex items-center justify-between font-sans text-[#6f6f6e] opacity-80 '>
				<p className='flex-1'>Product</p>
				<p className='flex-1'>Order ID</p>
				<p className='flex-1'>Date</p>
				<p className='flex-1'>Customer Name</p>
				<p className='flex-1'>Amount</p>
			</div>
			{orders.map(order => (
				<OrderItem key={order.id} order={order} />
			))}
		</div>
	)
}
