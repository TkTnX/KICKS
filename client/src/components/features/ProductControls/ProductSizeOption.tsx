"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { ISize } from "@/types"

export const ProductSizeOption = ({ sizes }: { sizes: ISize[] }) => {
	const [selected, setSelected] = useState<string>(sizes[0].id)
	return (
		<div className='mt-2 md:mt-8'>
			<b className='uppercase'>Size</b>
			<div className='flex items-center gap-4 mt-2'>
				{sizes.map(size => (
					<button
						onClick={() => setSelected(size.id)}
						className={cn(
							"w-[48px] h-[48px] flex items-center justify-center bg-white text-dark-gray rounded-lg",
							{
								"bg-dark-gray text-white": selected === size.id
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
