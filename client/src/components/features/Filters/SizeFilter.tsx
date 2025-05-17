"use client"

import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { useCatalog } from "@/hooks/useCatalog"

import sizeService from "@/services/size.service"

import { cn } from "@/lib/utils"
import { useFilterStore } from "@/stores/filterStore"

export const SizeFilter = () => {
	const pathname = usePathname()
	const { availableSizes } = useCatalog()
	const { selectedFilters, setSelectedFilters } = useFilterStore()
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
						onClick={() => setSelectedFilters("sizes", size.id)}
						disabled={!availableSizes?.includes(size.size)}
						className={cn(
							"w-10 h-10 bg-white hover:opacity-50 transition flex items-center justify-center text-dark-gray rounded-md disabled:bg-[#d2d1d3] disabled:text-[#8f8c91] disabled:hover:opacity-100 disabled:cursor-not-allowed",
							{
								"bg-dark-gray text-white":
									selectedFilters.sizes.includes(size.id)
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
