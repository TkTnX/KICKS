"use client"

import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"
import { useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { useCatalog } from "@/hooks/useCatalog"
import { useFilters } from "@/hooks/useFilters"

import sizeService from "@/services/size.service"

import { cn } from "@/lib/utils"

export const SizeFilter = () => {
	const pathname = usePathname()
	const [choosedSizes, setChoosedSizes] = useState<string[]>([])
	const { handleChangeFilters } = useFilters()
	const { availableSizes } = useCatalog()

	// TODO: Сейчас фильтрация работает криво. Пофиксить

	const { data } = useQuery({
		queryKey: ["sizes", pathname],
		queryFn: () => sizeService.getAll()
	})

	return (
		<AccordionItem value='size'>
			<AccordionTrigger className='font-semibold uppercase'>
				SIZE
			</AccordionTrigger>
			<AccordionContent className='flex flex-wrap sm:grid  sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 '>
				{data?.map(size => (
					<button
						disabled={!availableSizes?.includes(size.size)}
						onClick={() =>
							handleChangeFilters(
								choosedSizes,
								setChoosedSizes,
								size.size,
								"size"
							)
						}
						className={cn(
							"w-10 h-10 bg-white hover:opacity-50 transition flex items-center justify-center text-dark-gray rounded-md disabled:bg-[#d2d1d3] disabled:text-[#8f8c91] disabled:hover:opacity-100 disabled:cursor-not-allowed",
							{
								"bg-dark-gray text-white":
									choosedSizes.includes(size.size)
							}
						)}
						key={size.id}
					>
						{size.size}
					</button>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
