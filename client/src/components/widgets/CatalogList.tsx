"use client"

import { Loader2 } from "lucide-react"

import { useCatalog } from "@/hooks/useCatalog"

import { ErrorMessage } from "../entities/ErrorMessage"
import { ProductItem } from "../ui/ProductItem"

// TODO: В фильтрах получать данные

export const CatalogList = () => {
	const { products, error, isLoading } = useCatalog()

	if (isLoading)
		return (
			<Loader2 className='animate-spin flex-1 flex items-center justify-center' />
		)

	if (error) return <ErrorMessage error={error.message} type='Catalog' />

	return (
		<div className='flex-1 grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 w-full'>
			{products?.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	)
}
