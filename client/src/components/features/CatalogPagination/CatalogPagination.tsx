"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import ReactPaginate from "react-paginate"

import { useCatalog } from "@/hooks/useCatalog"

export const CatalogPagination = () => {
	const { page } = useCatalog()
	const pages = 10
	const router = useRouter()
	const searchParams = useSearchParams()
	if (pages <= 1) return null

	const handleChangePage = (page: number) => {
		if (page < 1 || page > pages) return
		const params = new URLSearchParams(searchParams)
		params.set("page", page.toString())
		router.push(`?${params.toString()}`)
	}

	// TODO: Сделать адаптив у пагинации

	return (
		<div className='flex items-center gap-4  justify-center mt-16'>
			<ReactPaginate
				breakLabel={
					<span className=' border border-dark-gray rounded-md py-2 px-4 flex items-center gap-1 group '>
						...
					</span>
				}
				nextLabel={
					<button
						onClick={() => handleChangePage(page + 1)}
						className='border border-dark-gray rounded-md py-2 px-4 flex items-center gap-1 group hover:bg-dark-gray hover:text-white transition'
					>
						<span className='text-sm tracking-wider uppercase text-dark-gray group-hover:text-white transition'>
							NEXT
						</span>
						<ChevronRight size={16} />
					</button>
				}
				previousLabel={
					<button
						onClick={() => handleChangePage(page - 1)}
						className='border border-dark-gray rounded-md py-2 px-4 flex items-center gap-1 group hover:bg-dark-gray hover:text-white transition'
					>
						<ChevronLeft size={16} />
						<span className='text-sm tracking-wider uppercase text-dark-gray group-hover:text-white transition'>
							PREVIOUS
						</span>
					</button>
				}
				pageCount={pages}
				pageRangeDisplayed={4}
				renderOnZeroPageCount={null}
				containerClassName='flex items-center gap-4 '
				pageClassName='overflow-hidden'
				activeClassName='bg-dark-gray text-white rounded-md'
				pageLinkClassName='cursor-pointer border border-dark-gray rounded-md py-2 px-4 flex items-center gap-1 group hover:bg-dark-gray hover:text-white transition rounded-md'
				onPageChange={({ selected }) => handleChangePage(selected + 1)}
			/>
		</div>
	)
}
