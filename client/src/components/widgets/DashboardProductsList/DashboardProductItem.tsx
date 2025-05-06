import { MoreHorizontal } from "lucide-react"
import Image from "next/image"

import { IProduct } from "@/types"

export const DashboardProductItem = ({ item }: { item: IProduct }) => {
	return (
		<div className=' bg-white rounded-2xl p-4'>
			<div className='flex items-start gap-4'>
				<Image
					src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0]}`}
					alt={item.title}
					width={84}
					height={84}
					className='rounded-xl'
				/>
				<div className='flex flex-col flex-1'>
					<h6>{item.title.split(" ").slice(0, 3).join(" ")}</h6>
					<p className='text-sm opacity-60'>{item.category.name}</p>
					<p className='font-sans text-sm font-bold mt-4'>
						${item.price}
					</p>
				</div>
				<button className='bg-[#efefef] w-[32px] h-[32px] rounded flex items-center justify-center hover:opacity-50'>
					<MoreHorizontal size={16} />
				</button>
			</div>
		</div>
	)
}
