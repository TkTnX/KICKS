import { AddToCart } from "./AddToCart"
import { AddToFavorites } from "./AddToFavorites"

export const ProductControls = ({ productId }: { productId: string }) => {
	return (
		<div className='mt-8 w-full'>
			<div className='flex items-center gap-2 '>
				<AddToCart productId={productId}>ADD TO CART</AddToCart>
				<AddToFavorites productId={productId} />
			</div>
			<AddToCart
				productId={productId}
				type='buy'
				className='bg-blue text-white mt-2 w-full hover:bg-blue/80 font-sans'
			>
				BUY IT NOW
			</AddToCart>
		</div>
	)
}
