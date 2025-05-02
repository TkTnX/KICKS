"use client"

import { useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { useCatalog } from "@/hooks/useCatalog"
import { useFilters } from "@/hooks/useFilters"

import { cn } from "@/lib/utils"

export const ColorFilter = () => {
	const [choosedColors, setChoosedColors] = useState<string[]>([])
	const { handleChangeFilters } = useFilters()
	const { availableColors } = useCatalog()

	return (
		<AccordionItem value='color'>
			<AccordionTrigger className='font-semibold uppercase'>
				COLOR
			</AccordionTrigger>
			<AccordionContent className='flex flex-wrap sm:grid  sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 '>
				{availableColors?.map(color => (
					<button
						onClick={() =>
							handleChangeFilters(
								choosedColors,
								setChoosedColors,
								color,
								"color"
							)
						}
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
