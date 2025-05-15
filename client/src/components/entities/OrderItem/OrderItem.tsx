"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { DeleteOrderButton } from "./DeleteOrderButton"
import { EOrderStatus, IOrder } from "@/types"

type Props = {
	order: IOrder
}

const getStatus = (status: EOrderStatus) => {
	if (status === EOrderStatus.PAYED) {
		return "#00c950"
	} else if (status === EOrderStatus.PENDING) {
		return "#ff6900"
	} else {
		return "#fb2c36"
	}
}

export const OrderItem = ({ order }: Props) => {
	const pathname = usePathname()

	return (
		<div className='flex flex-1 md:flex-auto flex-col md:flex-row md:items-center justify-between text-sm   py-3 relative '>
			<p className='md:flex-1 '>
				({order.products.length}) {order.products[0].product.title}{" "}
			</p>
			<p className='md:flex-1 '>#{order.id.slice(0, 5)}</p>
			<p className='md:flex-1 '>
				{new Date(order.createdAt).toLocaleDateString("ru-RU")}
			</p>
			<div className='flex items-center gap-2 md:flex-1 '>
				<Image
					src={order.user.image ?? "/images/no-avatar.jpg"}
					alt='USER AVATAR'
					width={24}
					height={24}
					className='rounded-full  object-cover'
				/>
				<p className='md:flex-1 text-left max-w-fit'>
					{order.user.name}
				</p>
			</div>
			<div className='md:flex-1 flex items-center gap-1'>
				<div
					style={{
						backgroundColor: getStatus(order.status)
					}}
					className={"w-2 h-2 rounded-full"}
				/>
				<span>{order.status}</span>
			</div>
			<p className='md:flex-1 '>${order.totalPrice}</p>
			{pathname.includes("dashboard") ? (
				<DeleteOrderButton orderId={order.id} />
			) : (
				<Link
					className='hover:opacity-70 transition'
					href={`/profile/orders/${order.id}`}
				>
					<ExternalLink />
				</Link>
			)}
		</div>
	)
}
