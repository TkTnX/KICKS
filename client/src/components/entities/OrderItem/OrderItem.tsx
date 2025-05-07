import Image from "next/image"

import { IOrder } from "@/types"

type Props = {
	order: IOrder
}

export const OrderItem = ({ order }: Props) => {
	return (
		<div className='flex items-center justify-between text-sm   py-3'>
			{/* TODO: Вернуть после добавления заказов */}
			{/* <p>{order.products[0].title}</p> */}
			<p className='flex-1 '>Adidas Ultra boost </p>
			<p className='flex-1 '>#{order.id.slice(0, 5)}</p>
			<p className='flex-1 '>
				{new Date(order.createdAt).toLocaleDateString("ru-RU")}
			</p>
			{/* TODO: Может быть, добавить метод оплаты */}
			<div className='flex items-center gap-2 flex-1 '>
				<Image
					src={order.user.image ?? "/images/no-avatar.jpg"}
					alt='USER AVATAR'
					width={24}
					height={24}
					className='rounded-full  object-cover'
				/>
				<p className='flex-1 text-left max-w-fit'>{order.user.name}</p>
			</div>
			{/* <p className='flex-1'>{order.status}</p> */}
			<p className='flex-1 '>${order.totalPrice}</p>
		</div>
	)
}
