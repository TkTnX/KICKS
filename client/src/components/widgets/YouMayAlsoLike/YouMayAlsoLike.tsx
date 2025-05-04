"use client"

import { useQuery } from "@tanstack/react-query"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { ProductItem } from "@/components/ui/ProductItem"
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"

import { useCart } from "@/hooks/useCart"

import productsService from "@/services/products.service"

export const YouMayAlsoLike = ({ categories }: { categories?: string[] }) => {
	const { categories: cartCategories } = useCart()
	const { data, error, isLoading } = useQuery({
		queryKey: [
			"products by category",
			categories ? categories.length : cartCategories?.length
		],
		queryFn: () =>
			productsService.getByCategory(
				categories ? categories : cartCategories!
			)
	})

	if (error) return <ErrorMessage type={"Simillar"} error={error.message} />

	return (
		<section className='mt-32'>
			<h3 className='flex-1 lg:max-w-[650px] text-xl vsm:text-2xl sm:text-4xl   font-semibold leading-[95%] '>
				You may also like
			</h3>
			<Carousel className='mt-4'>
				<CarouselContent>
					{isLoading
						? [...new Array(5)].map((_, index) => (
								<CarouselItem
									key={index}
									className=' md:basis-1/2'
								>
									<Skeleton className='w-full h-[292px] lg:h-[492px]' />
								</CarouselItem>
							))
						: data?.map(product => (
								<CarouselItem
									className=' basis-1/2 md:basis-1/3 lg:basis-1/4'
									key={product.id}
								>
									<ProductItem product={product} />
								</CarouselItem>
							))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
