"use client"

import { useEffect } from "react"

import { cn } from "@/lib/utils"
import { useCartStore } from "@/stores/cartStore"
import { IColor } from "@/types"

export const ProductColorOption = ({ colors }: { colors: IColor[] }) => {
	const { setValue, color: colorState } = useCartStore()
	useEffect(() => setValue("color", colors[0].id), [])

	return (
		<div className='mt-2 md:mt-8'>
			<b className='uppercase'>Color</b>
			<div className='flex items-center gap-4 mt-2'>
				{colors.map(color => (
					<div
						style={{ borderColor: color.value }}
						className={cn(
							"w-[32px] md:w-[48px] h-[32px] md:h-[48px] flex items-center justify-center",
							{
								"border-2 rounded-full  flex items-center justify-center":
									colorState === color.id
							}
						)}
						key={color.id}
					>
						<button
							onClick={() => setValue("color", color.id)}
							style={{ backgroundColor: color.value }}
							className={cn(
								"rounded-full w-[24px] md:w-[32px] h-[24px] md:h-[32px] "
							)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
