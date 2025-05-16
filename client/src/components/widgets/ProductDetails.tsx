import { Star } from "lucide-react"
import Link from "next/link"

import {
	ProductColorOption,
	ProductControls,
	ProductSizeOption
} from "../features/ProductControls"

import { IProduct } from "@/types"
import { formatPrice } from "@/helpers/formatPrice"

export const ProductDetails = ({ product }: { product: IProduct }) => {
	return (
		<div className='w-full lg:w-auto lg:flex-1'>
			<p className='text-xs text-white bg-blue py-3 px-4 rounded-xl w-fit'>
				{product.category.name}
			</p>
			<h2 className='text-xl md:text-3xl mt-4'>{product.title}</h2>
			<p className='text-2xl text-blue mt-4'>{formatPrice(product.price)}</p>
			<ProductColorOption colors={product.colors} />
			<ProductSizeOption sizes={product.sizes} />
			<ProductControls productId={product.id} />
			<Link
				className='text-xl  transition flex items-center gap-3 mt-4'
				href={`/reviews/${product.id}/write`}
			>
				<Star color='#fed216' fill='#fed216' />
				Write a review
			</Link>
		</div>
	)
}
