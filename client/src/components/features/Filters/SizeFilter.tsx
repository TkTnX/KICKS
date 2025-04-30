"use client"

import { useEffect, useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { useFilters } from "@/hooks/useFilters"

import { SIZES } from "./config"
import { cn } from "@/lib/utils"

export const SizeFilter = () => {
	const [choosedSizes, setChoosedSizes] = useState<string[]>([])
	const { setParams } = useFilters()

	const handleSizeClick = (size: string) => {
		if (choosedSizes.includes(size)) {
			setChoosedSizes(prev => prev.filter(s => s !== size))
		} else {
			setChoosedSizes(prev => [...prev, size])
		}
	}

	useEffect(() => {
		if (choosedSizes.length > 0) {
			setParams({ size: choosedSizes.join(",") })
		}
	}, [choosedSizes])

	return (
		<AccordionItem value='size'>
			<AccordionTrigger className='font-semibold uppercase'>
				SIZE
			</AccordionTrigger>
			<AccordionContent className='grid grid-cols-5 gap-4 '>
				{SIZES.map(size => (
					<button
						onClick={() => handleSizeClick(size)}
						className={cn(
							"w-10 h-10 bg-white hover:opacity-50 transition flex items-center justify-center text-dark-gray rounded-md",
							{
								"bg-dark-gray text-white":
									choosedSizes.includes(size)
							}
						)}
						key={size}
					>
						{size}
					</button>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
