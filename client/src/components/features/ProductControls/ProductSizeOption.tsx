"use client"

import { useEffect } from "react"

import { useCart } from "@/hooks/useCart"

import { cn } from "@/lib/utils"
import { useCartStore } from "@/stores/cartStore"
import { ISize } from "@/types"

export const ProductSizeOption = ({ sizes }: { sizes: ISize[] }) => {
	const { setValue, size: sizeState } = useCartStore()
	useEffect(() => setValue("size", sizes[0].id), [])

	return (
		<div className='mt-2 md:mt-8'>
			<b className='uppercase'>Size</b>
			<div className='flex items-center gap-4 mt-2'>
				{sizes.map(size => (
					<button
						onClick={() => setValue("size", size.id)}
						className={cn(
							"w-[48px] h-[48px] flex items-center justify-center bg-white text-dark-gray rounded-lg",
							{
								"bg-dark-gray text-white": sizeState === size.id
							}
						)}
						key={size.id}
					>
						{size.size}
					</button>
				))}
			</div>
		</div>
	)
}
