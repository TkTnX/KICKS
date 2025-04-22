import { useEffect, useImperativeHandle, useState } from "react"

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel"

import { CategoryItem } from "./CategoryItem"
import { ICategory } from "@/shared/types"

type Props = {
	categories: ICategory[]
	onApiReady?: (api: CarouselApi) => void
	ref?: React.RefObject<CarouselApi | null>
}
export const CategoriesCarousel = ({ categories, onApiReady, ref }: Props) => {
	const [api, setApi] = useState<CarouselApi>()

	useImperativeHandle(ref, () => api, [api])

	useEffect(() => {
		if (api && onApiReady) onApiReady(api)
	}, [api, onApiReady])

	return (
		<Carousel
			setApi={setApi}
			className='container-right rounded-tl-[99px] overflow-hidden mt-16'
		>
			<CarouselContent>
				{categories.map(category => (
					<CarouselItem className=' md:basis-1/2' key={category.id}>
						<CategoryItem category={category} />
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
