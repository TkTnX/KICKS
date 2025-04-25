import { useQuery } from "@tanstack/react-query"
import { useEffect, useImperativeHandle, useState } from "react"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"

import categoriesService from "@/services/categories.service"

import { CategoryItem } from "./CategoryItem"

type Props = {
	onApiReady?: (api: CarouselApi) => void
	ref?: React.RefObject<CarouselApi | null>
}
export const CategoriesCarousel = ({ onApiReady, ref }: Props) => {
	const {
		data: categories,
		isLoading,
		error
	} = useQuery({
		queryKey: ["Categories"],
		queryFn: () => categoriesService.getCategories(4)
	})
	const [api, setApi] = useState<CarouselApi>()

	useImperativeHandle(ref, () => api, [api])

	useEffect(() => {
		if (api && onApiReady) onApiReady(api)
	}, [api, onApiReady])

	if (error) return <ErrorMessage type='categories' error={error.message} />

	return (
		<Carousel
			setApi={setApi}
			className='container-right rounded-tl-[99px] overflow-hidden mt-16'
		>
			<CarouselContent>
				{isLoading
					? [...new Array(5)].map((_, index) => (
							<CarouselItem key={index} className=' md:basis-1/2'>
								<Skeleton className='w-full h-[292px] lg:h-[492px]' />
							</CarouselItem>
						))
					: categories
							?.filter(category => category.products.length)
							.map(category => (
								<CarouselItem
									className=' md:basis-1/2'
									key={category.id}
								>
									<CategoryItem category={category} />
								</CarouselItem>
							))}
			</CarouselContent>
		</Carousel>
	)
}
