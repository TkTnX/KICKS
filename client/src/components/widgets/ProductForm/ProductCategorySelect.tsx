import type * as SelectPrimitive from "@radix-ui/react-select"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { UseFormReturn } from "react-hook-form"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

import { useProductForm } from "@/hooks/useProductForm"

import categoriesService from "@/services/categories.service"

interface Props {
	label: string
	className?: string
	defaultCategory: string
	formItem: UseFormReturn<any>
}

export const ProductCategorySelect = ({
	label,
	className,
	defaultCategory,
	formItem
}: Props) => {
	const { store } = useProductForm()
	const { data } = useQuery({
		queryKey: ["categories"],
		queryFn: () => categoriesService.getCategories()
	})
	useEffect(() => store.setCategoryId(defaultCategory), [])

	const getCategoryName = (id: string) => {
		return (
			data?.find(category => category.id === id)?.name ||
			"Choose category"
		)
	}

	return (
		<Select
			defaultValue={store.categoryId!}
			{...formItem.register("categoryId")}
			name='categoryId'
		>
			<span className='text-xl font-sans font-semibold'>{label}</span>
			<SelectTrigger
				defaultValue={store.categoryId!}
				className='!w-full !border !border-dark-gray !text-[#73737c]'
			>
				<SelectValue
					defaultValue={store.categoryId!}
					placeholder={getCategoryName(store.categoryId!)}
				/>
			</SelectTrigger>
			<SelectContent className='w-full'>
				{data?.map(category => (
					<SelectItem
						onChange={() => store.setCategoryId(category.id)}
						key={category.id}
						value={category.id}
					>
						{category.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
