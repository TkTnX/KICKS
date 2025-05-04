import Image from "next/image"

import { BagItemControls } from "../features/BagItemControls"

import { ICartItem } from "@/types"

export const BagItem = ({ item }: { item: ICartItem }) => {
	return (
		<div className='flex items-stretch gap-2 sm:gap-6 w-full max-h-[225px]'>
			<div className='relative w-[180px] h-[155px] sm:w-[200px] sm:h-[225px]'>
				<Image
					src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.product.images[0]}`}
					alt={item.product.title}
					className='rounded-3xl object-cover'
					fill
				/>
			</div>
			<div className='w-full flex flex-col justify-between'>
				<div className='flex flex-col w-full'>
					<div className='flex flex-col lg:flex-row  lg:items-center justify-between'>
						<h5 className='text-base lg:text-2xl font-semibold'>
							{item.product.title}
						</h5>
						<p className='text-base lg:text-2xl sont-semibold text-blue'>
							${item.product.price}
						</p>
					</div>
					<p className='text-sm lg:text-base mt-2 opacity-80 font-sans'>
						{item.product.category.name}
					</p>

					<div className='flex flex-col sm:flex-row sm:items-center sm:gap-10 mt-2'>
						<p className='text-sm lg:text-base font-sans  opacity-80'>
							Size {item.size.size}
						</p>
						<p className='text-sm lg:text-base font-sans  opacity-80'>
							Quantity {item.quantity}
						</p>
					</div>
				</div>
				<BagItemControls id={item.id}  />
			</div>
		</div>
	)
}
