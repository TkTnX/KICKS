"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { AddToFavorites } from "../features/ProductControls/AddToFavorites"

import { cn } from "@/lib/utils"
import { IProduct } from "@/types"

type Props = {
	product: IProduct
	className?: string
}

export const ProductItem = ({ product, className }: Props) => {
	const pathname = usePathname()
	const isNew =
		product.createdAt > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
	return (
		<div className={cn("flex flex-col justify-between h-full", className)}>
			<div className='relative w-full h-[200px] lg:h-[334px] rounded-3xl border-4 border-white overflow-hidden'>
				{isNew && (
					<div className='absolute top-0 left-0 rounded-tl-3xl rounded-br-3xl  p-3 vsm:py-3  vsm:px-4 bg-blue text-xs font-semibold text-white z-10'>
						New
					</div>
				)}
				<Image
					className='object-cover'
					src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0]}`}
					alt={product.title}
					fill
				/>
			</div>
			<div className='mt-4'>
				<h4 className='font-semibold text-base sm:text-xl lg:text-2xl text-dark-gray'>
					{product.title}
				</h4>
				<div className='flex items-center  gap-2 mt-4'>
					<Link
						className=' bg-dark-gray rounded-sm py-2 px-2 sm:px-4 block w-full text-center text-white hover:opacity-90 font-medium transition text-xs sm:text-sm'
						href={`/product/${product.id}`}
					>
						VIEW PRODUCT -{" "}
						<span className='text-yellow'>${product.price}</span>
					</Link>
					{pathname.includes("favorites") && (
						<AddToFavorites
							className='h-[36px]'
							productId={product.id}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
