"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import ResponsivePagination, { dropEllipsis } from "react-responsive-pagination"
import "react-responsive-pagination/themes/classic-light-dark.css"

import { useCatalog } from "@/hooks/useCatalog"



export const CatalogPagination = () => {
	const { page, pages } = useCatalog()
	const router = useRouter()
	const searchParams = useSearchParams()
	if (pages <= 1) return null
	const handleChangePage = (page: number) => {
		if (page < 1 || page > pages) return
		const params = new URLSearchParams(searchParams)
		params.set("page", page.toString())
		router.push(`?${params.toString()}`)
	}

	return (
		<div className='flex items-center gap-4  justify-center mt-16 w-full'>
			<ResponsivePagination
				current={page}
				total={pages}
				narrowBehaviour={dropEllipsis}
				className='gap-4 flex items-center w-full justify-center flex-wrap'
				activeItemClassName='bg-dark-gray text-white rounded-md'
				pageLinkClassName='cursor-pointer border border-dark-gray rounded-md py-2 px-4 flex items-center gap-1 group hover:bg-dark-gray hover:text-white transition rounded-md'
				onPageChange={handleChangePage}
				pageItemClassName='page-item border-none outline-transparent p-0'
				previousLabel={
					<button
						onClick={() => handleChangePage(page - 1)}
						className=' rounded-md  flex items-center gap-1 group hover:bg-dark-gray hover:text-white transition'
					>
						<ChevronLeft size={16} />
						<span className='hidden sm:block  text-sm tracking-wider uppercase text-dark-gray group-hover:text-white transition'>
							PREVIOUS
						</span>
					</button>
				}
				nextLabel={
					<button
						onClick={() => handleChangePage(page + 1)}
						className=' rounded-md  flex items-center gap-1 group hover:bg-dark-gray hover:text-white transition'
					>
						<span className='hidden sm:block  text-sm tracking-wider uppercase text-dark-gray group-hover:text-white transition'>
							NEXT
						</span>
						<ChevronRight size={16} />
					</button>
				}
			/>
		</div>
	)
}
