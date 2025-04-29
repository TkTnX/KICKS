"use client"

import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"

import productsService from "@/services/products.service"

import { ErrorMessage } from "../entities/ErrorMessage"
import { ProductItem } from "../ui/ProductItem"

export const CatalogList = () => {
	const searchParams = useSearchParams()
	const params = Object.fromEntries(searchParams.entries())
	const { data, error, isLoading } = useQuery({
		queryKey: ["catalog", params],
		queryFn: () => productsService.getProducts(9, params)
	})

	if (isLoading)
		return (
			<Loader2 className='animate-spin flex-1 flex items-center justify-center' />
		)

	if (error) return <ErrorMessage error={error.message} type='Catalog' />

	return (
		<div className='flex-1 grid grid-cols-3 gap-x-4 gap-y-8'>
			{data?.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	)
}
