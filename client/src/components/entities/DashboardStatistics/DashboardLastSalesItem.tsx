import Image from "next/image"

import { formatPrice } from "@/helpers/formatPrice"
import { IOrderItem } from "@/types"

export const DashboardLastSalesItem = ({ item }: { item: IOrderItem }) => {
	return (
		<div className='flex flex-wrap items-center gap-4 border-b pb-4'>
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
					{formatPrice(item.product.price)}
				</p>
			</div>
			<div>
				<p className='font-sans font-semibold'>
					${item.product.price * item.quantity}
				</p>
				<p className='text-sm opacity-60'>quantity: {item.quantity}</p>
			</div>
		</div>
	)
}
