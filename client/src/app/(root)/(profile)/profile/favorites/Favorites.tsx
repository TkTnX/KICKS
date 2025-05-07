"use client"

import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { ProductItem } from "@/components/ui/ProductItem"

import favoriteItemService from "@/services/favoriteItem.service"

export const Favorites = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["favorites"],
		queryFn: () => favoriteItemService.getAll()
	})

	if (isLoading)
		return (
			<div className='w-full flex justify-center'>
				<Loader2 className='animate-spin' />
			</div>
		)

	if (error) return <ErrorMessage type='favorites' error={error.message} />
	if (data?.length === 0)
		return <div className='text-center text-2xl'>No favorites yet!</div>
	return (
		<div className='grid vsm:grid-cols-2 sm:grid-cols-3 gap-2'>
			{data?.map(favorite => (
				<ProductItem key={favorite.id} product={favorite.product} />
			))}
		</div>
	)
}
