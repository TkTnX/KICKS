import {
	ProductColorOption,
	ProductControls,
	ProductSizeOption
} from "../features/ProductControls"

import { IProduct } from "@/types"

export const ProductDetails = ({ product }: { product: IProduct }) => {
	return (
		<div className='w-full lg:w-auto'>
			<p className='text-xs text-white bg-blue py-3 px-4 rounded-xl w-fit'>
				{product.category.name}
			</p>
			<h2 className='text-xl md:text-3xl mt-4'>{product.title}</h2>
			<p className='text-2xl text-blue mt-4'>${product.price}</p>
			<ProductColorOption colors={product.colors} />
			<ProductSizeOption sizes={product.sizes} />
			<ProductControls />
		</div>
	)
}
