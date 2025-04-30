"use client"

import { useEffect, useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { useFilters } from "@/hooks/useFilters"

import { COLORS } from "./config"
import { cn } from "@/lib/utils"

export const ColorFilter = () => {
	const [choosedColors, setChoosedColors] = useState<string[]>([])
	const { setParams } = useFilters()

	const handleColorClick = (color: string) => {
		if (choosedColors.includes(color)) {
			setChoosedColors(prev => prev.filter(c => c !== color))
		} else {
			setChoosedColors(prev => [...prev, color])
		}
	}

	useEffect(() => {
		if (choosedColors.length > 0) {
			setParams({ color: choosedColors.join(",") })
		}
	}, [choosedColors])
	return (
		<AccordionItem value='color'>
			<AccordionTrigger className='font-semibold uppercase'>
				COLOR
			</AccordionTrigger>
			<AccordionContent className='grid grid-cols-5 gap-4 '>
				{COLORS.map(color => (
					<button
						onClick={() => handleColorClick(color)}
						className={cn(
							`w-10 h-10 bg-[${color}] hover:opacity-50 transition   rounded-md`,
							{
								"border-2 border-dark-gray":
									choosedColors.includes(color)
							}
						)}
						style={{ backgroundColor: color }}
						key={color}
					/>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
