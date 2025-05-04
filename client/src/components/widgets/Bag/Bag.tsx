"use client"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { BagItem } from "@/components/ui/BagItem"
import { Skeleton } from "@/components/ui/skeleton"

import { useCart } from "@/hooks/useCart"

export const Bag = () => {
	const { cart, isLoading, error } = useCart()
	if (error) return <ErrorMessage error={error.message} type='cart' />
	return (
		<div className='rounded-2xl p-4 md:p-6 bg-white w-full md:max-w-[800px] flex-1'>
			<h4 className='text-3xl font-semibold'>Your Bag</h4>
			<p className='mt-2 font-sans'>
				Items in your bag not reserved- check out now to make them
				yours.
			</p>

			<div className='flex flex-col gap-4 mt-12'>
				{isLoading ? (
					<Skeleton className='h-[225px] w-full bg-dark-gray/50' />
				) : cart && cart.cartItems.length > 0 ? (
					cart?.cartItems.map(cartItem => (
						<BagItem item={cartItem} key={cartItem.id} />
					))
				) : (
					<p className='text-center py-10'>Cart is empty!</p>
				)}
			</div>
		</div>
	)
}
