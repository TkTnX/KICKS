"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

import categoriesService from "@/services/categories.service"

import { ICategory } from "@/types"

export const CategoryFilter = () => {
	const [categories, setCategories] = useState<ICategory[]>([])
	const choosedCategory = usePathname().split("/")[2]
	const router = useRouter()
	useEffect(() => {
		const fetchCategories = async () => {
			const res = await categoriesService.getCategories()
			setCategories(res)
		}
		fetchCategories()
	}, [])
	return (
		<AccordionItem value='category'>
			<AccordionTrigger className='font-semibold uppercase'>
				CATEGORY
			</AccordionTrigger>
			<AccordionContent className='flex flex-col gap-2 '>
				{categories.map(category => (
					<label
						key={category.id}
						className='flex items-center gap-4 cursor-pointer'
					>
						<Checkbox
							checked={choosedCategory === category.slug}
							onClick={() =>
								router.push(`/catalog/${category.slug}`)
							}
							className='rounded-sm  transition flex items-center justify-center text-dark-gray '
						/>
						{category.name}
					</label>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
