import { BagItem } from "@/components/ui/BagItem"
import { Skeleton } from "@/components/ui/skeleton"

import { ICartItem } from "@/types"

type Props = {
	isLoading?: boolean
	cartItems: ICartItem[]
	isCart?: boolean
}

export const BagList = ({ isLoading, cartItems, isCart }: Props) => {
	return (
		<div className='flex flex-col gap-4 mt-3 sm:mt-12'>
			{isLoading ? (
				<Skeleton className='h-[225px] w-full bg-dark-gray/50' />
			) : cartItems.length > 0 ? (
				cartItems.map(cartItem => (
					<BagItem
						isCart={isCart}
						item={cartItem}
						key={cartItem.id}
					/>
				))
			) : (
				<p className='text-center py-10'>Cart is empty!</p>
			)}
		</div>
	)
}
