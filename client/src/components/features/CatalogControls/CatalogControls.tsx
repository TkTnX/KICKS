"use client"

import { Filter } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

import { SORT_ITEMS } from "@/app/(root)/catalog/[slug]/config"

import { FiltersModal } from "@/components/ui/modals"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

import { cn } from "@/lib/utils"

export const CatalogControls = ({ className }: { className?: string }) => {
	const searchParams = useSearchParams()
	const router = useRouter()

	const handleChangeValue = (value: string) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set("sortBy", value)
		router.push(`?${params.toString()}`)
	}
	return (
		<div className={cn("flex items-center w-full gap-4", className)}>
			<div className='block sm:hidden flex-1'>
				<FiltersModal>
					<button className='flex items-center bg-white  justify-between w-full text-sm font-sans px-4 py-2 rounded-md'>
						Filters
						<Filter size={16} />
					</button>
				</FiltersModal>
			</div>
			<Select onValueChange={handleChangeValue}>
				<SelectTrigger className='bg-white gap-11 flex-1 sm:flex-none ml-auto '>
					<SelectValue
						className='bg-white text-dark-gray placeholder:text-dark-gray '
						placeholder='Sort By'
					/>
				</SelectTrigger>
				<SelectContent className='bg-white'>
					{SORT_ITEMS.map(item => (
						<SelectItem key={item.value} value={item.value}>
							{item.text}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
