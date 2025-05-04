"use client"

import Image from "next/image"
import { useState } from "react"

export const ProductImages = ({ images }: { images: string[] }) => {
	const [showedImage, setShowedImage] = useState(images[0])
	return (
		<>
			{/* SMALL */}
			<div className='block sm:hidden w-full'>
				<div className='flex w-full justify-center lg:grid  lg:grid-cols-2  gap-4 rounded-2xl overflow-hidden'>
					<div className='w-full  h-[270px] md:h-[310px] xl:h-[510px] relative first:col-span-2 sm:first:col-auto'>
						<Image
							alt={`${showedImage}`}
							src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${showedImage}`}
							fill
							className='object-cover'
						/>
					</div>
				</div>
				<div className='flex items-center gap-2 mt-2'>
					{images
						.filter(img => img !== showedImage)
						.map((image, index) => (
							<button
								onClick={() => setShowedImage(image)}
								className='w-[64px] h-[64px] relative first:col-span-2 sm:first:col-auto rounded-lg'
								key={index}
							>
								<Image
									alt={`${image}-${index}`}
									src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
									fill
									className='object-cover'
								/>
							</button>
						))}
				</div>
			</div>
			{/* LARGE */}
			{images.length > 1 ? (
				<div className='hidden sm:flex w-full justify-center lg:grid  lg:grid-cols-2  gap-4 rounded-2xl overflow-hidden'>
					{images.map((image, index) => (
						<div
							className='w-full  h-[270px] md:h-[310px] xl:h-[510px] relative first:col-span-2 sm:first:col-auto'
							key={index}
						>
							<Image
								alt={`${image}-${index}`}
								src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
								fill
								className='object-cover'
							/>
						</div>
					))}
				</div>
			) : (
				<div className='hidden sm:flex relative w-full max-w-[500px] h-[510px]  items-center justify-center'>
					<Image
						src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]}`}
						alt={images[0]}
						fill
					/>
				</div>
			)}
		</>
	)
}
