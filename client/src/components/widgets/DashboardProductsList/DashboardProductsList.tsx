"use client"

import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"

import { ErrorMessage } from "@/components/entities/ErrorMessage"

import productsService from "@/services/products.service"

import { DashboardProductItem } from "./DashboardProductItem"

export const DashboardProductsList = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["products"],
		queryFn: () => productsService.getProducts()
	})

	if (isLoading)
		return (
			<div className='w-full flex items-center justify-center'>
				<Loader2 className='animate-spin' />
			</div>
		)

	if (error) return <ErrorMessage type='products' error={error.message} />

	return (
		<div className='grid vsm:grid-cols-2 xl:grid-cols-3 gap-3.5 mt-6'>
			{data?.map(product => (
				<DashboardProductItem key={product.id} item={product} />
			))}
		</div>
	)
}
