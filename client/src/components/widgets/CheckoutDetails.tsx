"use client"

import { useCart } from "@/hooks/useCart"

import { BagList } from "./Bag/BagList"
import { OrderSummary } from "./OrderSummary"

export const CheckoutDetails = () => {
	const { cart, isLoading } = useCart()
	return (
		<div className='w-full md:max-w-[420px]'>
			<OrderSummary className='p-2 md:p-6 md:bg-white rounded-lg md:rounded-3xl' />
			<div className='mt-3 sm:mt-12 bg-white p-2 sm:p-6 rounded-lg sm:rounded-3xl'>
				<h4 className='text-3xl'>Order Details</h4>
				<BagList
					isCart={false}
					isLoading={isLoading}
					cartItems={cart ? cart.cartItems : []}
				/>
			</div>
		</div>
	)
}
