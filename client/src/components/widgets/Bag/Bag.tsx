"use client"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { BagItem } from "@/components/ui/BagItem"
import { Skeleton } from "@/components/ui/skeleton"

import { useCart } from "@/hooks/useCart"
import { BagList } from "./BagList"

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

			<BagList isLoading={isLoading} cartItems={cart ? cart.cartItems : []} />
		</div>
	)
}
