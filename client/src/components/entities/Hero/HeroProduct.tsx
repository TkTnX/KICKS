import Image from "next/image"

import { Link } from "@/components/ui/Link"

const lastProduct = {
	id: 1,
	images: [
		"/images/hero-product1.jpg",
		"/images/hero-product2.jpg",
		"/images/hero-product3.jpg"
	],
	title: "Nike Air Max",
	description: "Nike introducing the new air max for everyone's comfort"
}

export const HeroProduct = () => {
	// TODO: В будущем получать тут самый популярный товар или последний добавленный
	return (
		<div className='h-[382px] sm:h-[500px] lg:h-[750px] w-full relative'>
			<Image
				src={lastProduct.images[0]}
				alt={lastProduct.title}
				fill
				className='object-cover w-full h-full rounded-3xl sm:rounded-[64px]'
			/>
			{/* HINT */}
			<div className='p-2 lg:p-6 rounded-b-2xl bg-dark-gray -rotate-90 absolute top-28 sm:top-40 left-[20px] lg:left-[36px] -translate-x-1/2 -translate-y-1/2  text-white'>
				Most Popular
			</div>
			{/* TEXT */}
			<div className='absolute  left-4 sm:left-12 bottom-4 sm:bottom-12 text-white'>
				<h2 className='font-semibold text-2xl sm:text-4xl  lg:text-7xl uppercase'>
					{lastProduct.title}
				</h2>
				<p className='font-semibold text-sm sm:text-xl lg:text-2xl text-gray max-w-[200px] sm:max-w-[350px] lg:max-w-[490px]'>
					{lastProduct.description}
				</p>
				<Link href={`/product/${lastProduct.id}`} className='mt-6'>
					SHOP NOW
				</Link>
			</div>
			{/* MORE IMAGES */}
			<div className='flex flex-col gap-3 absolute bottom-4 sm:bottom-12 right-4 sm:right-12'>
				{lastProduct.images.slice(1).map((image, index) => (
					<Image
						key={index}
						src={image}
						alt={lastProduct.title}
						width={160}
						height={160}
						className='lg:w-[160px] lg:h-[160px] sm:w-[80px] w-16 sm:h-[80px] h-16 border-2 border-white rounded-lg'
					/>
				))}
			</div>
		</div>
	)
}
