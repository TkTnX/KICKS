"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { CarouselApi } from "@/components/ui/carousel"

import { CategoriesCarousel } from "./CategoriesCarousel"

// TODO: TEMP DATA
const categories = [
	{
		id: 1,
		slug: "lifestyle",
		title: "Lifestyle shoes",
		image: "/images/categories/1.jpg"
	},
	{
		id: 2,
		slug: "basketball",
		title: "Basketball shoes",
		image: "/images/categories/1.jpg"
	},
	{
		id: 3,
		slug: "running",
		title: "Running shoes",
		image: "/images/categories/3.jpg"
	},
	{
		id: 4,
		slug: "training",
		title: "Training shoes",
		image: "/images/categories/4.jpg"
	},
	{
		id: 5,
		slug: "tennis",
		title: "Tennis shoes",
		image: "/images/categories/5.jpg"
	},
	{
		id: 6,
		slug: "football",
		title: "Football boots",
		image: "/images/categories/6.jpg"
	}
]

export const Categories = () => {
	const carouselRef = useRef<CarouselApi | null>(null)
	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			if (!carouselRef.current) return
			setCanScrollPrev(carouselRef.current.canScrollPrev())
			setCanScrollNext(carouselRef.current.canScrollNext())
		}, 100)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='mt-32 bg-dark-gray'>
			<div className='pt-20'>
				<div className='container flex items-center justify-between '>
					<h3 className='flex-1 lg:max-w-[650px] text-xl vsm:text-2xl sm:text-4xl  lg:text-7xl font-semibold leading-[95%] uppercase text-white'>
						Categories
					</h3>
					<div className='flex items-center gap-4'>
						<button
							disabled={!canScrollPrev}
							onClick={() => carouselRef.current?.scrollPrev()}
							className='bg-white rounded-lg w-10 h-10 flex items-center justify-center hover:opacity-80 transition disabled:opacity-50 disabled:pointer-events-none'
						>
							<ChevronLeft size={16} />
						</button>
						<button
							disabled={!canScrollNext}
							onClick={() => carouselRef.current?.scrollNext()}
							className='bg-white rounded-lg w-10 h-10 flex items-center justify-center hover:opacity-80 transition disabled:opacity-50 disabled:pointer-events-none'
						>
							<ChevronRight size={16} />
						</button>
					</div>
				</div>
				<CategoriesCarousel categories={categories} ref={carouselRef} />
			</div>
		</div>
	)
}
