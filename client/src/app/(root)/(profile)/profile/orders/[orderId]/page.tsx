import { Metadata } from "next"

import { DashboardLastSalesItem } from "@/components/entities/DashboardStatistics"

import orderService from "@/services/order.service"

import { formatPrice } from "@/helpers/formatPrice"

export const metadata: Metadata = {
	title: "Order"
}

const OrderPage = async ({
	params
}: {
	params: Promise<{ orderId: string }>
}) => {
	const orderId = (await params).orderId
	const order = await orderService.getOneById(orderId)
	return (
		<div>
			<h2 className='text-2xl '>
				Order <span className='text-xl opacity-60'>#{order.id}</span>
			</h2>
			<div className='grid gap-3 mt-4 bg-white p-4 rounded-lg'>
				<h4 className='font-sans text-xl'>Items</h4>
				{order.products.map(orderItem => (
					<DashboardLastSalesItem
						key={orderItem.id}
						item={orderItem}
					/>
				))}
			</div>
			<div className='flex items-center justify-between mt-10'>
				<p className='opacity-60 font-sans font-bold text-3xl'>
					{formatPrice(order.totalPrice)}
				</p>
				<p className='font-sans font-bold text-xl'>
					Status: {order.status}
				</p>
			</div>
		</div>
	)
}

export default OrderPage
