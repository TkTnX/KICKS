"use client"

import { Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { useCatalog } from "@/hooks/useCatalog"

import { ErrorMessage } from "../entities/ErrorMessage"
import { ProductItem } from "../ui/ProductItem"

export const CatalogList = () => {
	const { products, error, isLoading } = useCatalog()
	const searchParams = useSearchParams()
	if (isLoading)
		return (
			<Loader2 className='animate-spin flex-1 flex items-center justify-center w-full' />
		)


	if (error) return <ErrorMessage error={error.message} type='Catalog' />
	return (
		<>
			{searchParams.get("query") && (
				<p className='mb-4'>
					Search query: {searchParams.get("query")}
				</p>
			)}
			<div className='flex-1 grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 w-full'>
				{products && products.length > 0 ? (
					products.map(product => (
						<ProductItem key={product.id} product={product} />
					))
				) : (
					<p className='text-center text-2xl'>No products found</p>
				)}
			</div>
		</>
	)
}
