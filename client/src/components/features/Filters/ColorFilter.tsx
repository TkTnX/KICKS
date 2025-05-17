"use client"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { useCatalog } from "@/hooks/useCatalog"

import { cn } from "@/lib/utils"
import { useFilterStore } from "@/stores/filterStore"

export const ColorFilter = () => {
	const { availableColors } = useCatalog()
	const { selectedFilters, setSelectedFilters } = useFilterStore()

	return (
		<AccordionItem value='color'>
			<AccordionTrigger className='font-semibold uppercase'>
				COLOR
			</AccordionTrigger>
			<AccordionContent className='flex flex-wrap sm:grid  sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 '>
				{availableColors?.map(color => (
					<button
						onClick={() => setSelectedFilters("colors", color)}
						className={cn(
							`w-10 h-10 bg-[${color}] hover:opacity-50 transition   rounded-md`,
							{
								"border-2 border-dark-gray":
									selectedFilters.colors.includes(color)
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
