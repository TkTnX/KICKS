"use client"

import { useQuery } from "@tanstack/react-query"

import { Block } from "@/components/entities/Block"

import productsService from "@/services/products.service"

import { ProductItem } from "../ui/ProductItem"
import { Skeleton } from "../ui/skeleton"

export const NewDrops = () => {
	const {
		data: products,
		isLoading,
		error
	} = useQuery({
		queryKey: ["new drops"],
		queryFn: () => productsService.getProducts(4)
	})

	if (error)
		return (
			<div className='text-center text-xs text-red-500'>
				Error getting products!
			</div>
		)
	return (
		<section className='container mt-6 sm:mt-20'>
			<Block
				title='Don’t miss out new drops'
				link='/catalog?sortBy=new'
				linkTitle='SHOP NEW DROPS'
			>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
					{isLoading
						? [...new Array(4)].map((_, index) => (
								<Skeleton
									className='w-full h-[296px] lg:h-[434px] bg-dark-gray/50'
									key={index}
								/>
							))
						: products?.map(product => (
								<ProductItem
									key={product.id}
									product={product}
								/>
							))}
				</div>
			</Block>
		</section>
	)
}
