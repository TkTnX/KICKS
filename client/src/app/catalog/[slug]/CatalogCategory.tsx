"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

import { SORT_ITEMS } from "./config"
import { ICategory } from "@/types"

export const CatalogCategory = ({ category }: { category: ICategory }) => {
	const searchParams = useSearchParams()
	const router = useRouter()

	const handleChangeValue = (value: string) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set("sortBy", value)
		router.push(`?${params.toString()}`)
	}

	return (
		<div className='mt-8 flex items-center justify-between'>
			<div>
				<h4 className='text-4xl font-semibold'>{category.name}</h4>
				<p className='opacity-80 font-sans'>
					{category.products.length} items
				</p>
			</div>

			<Select onValueChange={handleChangeValue}>
				<SelectTrigger className='bg-white gap-11'>
					<SelectValue className='bg-white ' placeholder='Sort By' />
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
