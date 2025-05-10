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
	defaultCategory: string
	formItem: UseFormReturn<any>
	isLoading: boolean
}

export const ProductCategorySelect = ({
	label,
	defaultCategory,
	formItem,
	isLoading
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
			disabled={isLoading}
			onValueChange={value => store.setCategoryId(value)}
			defaultValue={store.categoryId!}
			{...formItem.register("categoryId")}
		>
			<span className='text-xl font-sans font-semibold'>{label}</span>
			<SelectTrigger
				defaultValue={store.categoryId!}
				className='!w-full !border !border-dark-gray !text-dark-gray disabled:opacity-50 disabled:pointer-events-none'
			>
				<SelectValue
					defaultValue={store.categoryId!}
					placeholder={getCategoryName(store.categoryId!)}
				/>
			</SelectTrigger>
			<SelectContent className='w-full disabled:opacity-50 disabled:pointer-events-none'>
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
