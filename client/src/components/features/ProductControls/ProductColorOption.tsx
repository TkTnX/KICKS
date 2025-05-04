"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { IColor } from "@/types"

export const ProductColorOption = ({ colors }: { colors: IColor[] }) => {
	const [selected, setSelected] = useState<string>(colors[0].id)
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
									selected === color.id
							}
						)}
						key={color.id}
					>
						<button
							onClick={() => setSelected(color.id)}
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
