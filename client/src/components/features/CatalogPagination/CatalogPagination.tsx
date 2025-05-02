"use client"

import { ChevronLeft } from "lucide-react"

import { useCatalog } from "@/hooks/useCatalog"

export const CatalogPagination = () => {
	const { error, isLoading, pages, page, setPage } = useCatalog()
	console.log(pages)
	if (pages <= 1) return null
	return (
		<div className='flex items-center gap-4  justify-center'>
			<button className='border border-dark-gray rounded-md py-2 px-4 flex items-center gap-1'>
				<ChevronLeft size={16} />
				<span className='text-sm tracking-wider uppercase text-dark-gray'>
					PREVIOUS
				</span>
			</button>
			{[...new Array(pages)].map((_, index) => (
				<button
					className='border border-dark-gray py-2 px-4 rounded-md hover:bg-dark-gray hover:text-white transition'
					key={index}
				>
					{index + 1}
				</button>
			))}
		</div>
	)
}
