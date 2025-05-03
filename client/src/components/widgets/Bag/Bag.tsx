"use client"

import { BagItem } from "@/components/ui/BagItem"

import { useCart } from "@/hooks/useCart"

export const Bag = () => {
	const { cart, isLoading, error } = useCart()
	console.log(cart)
	return (
		<div className='rounded-2xl p-4 md:p-6 bg-white w-full md:max-w-[800px] flex-1'>
			<h4 className='text-3xl font-semibold'>Your Bag</h4>
			<p className='mt-2 font-sans'>
				Items in your bag not reserved- check out now to make them
				yours.
			</p>

			<div className='flex flex-col gap-4 mt-12'>
				{[...new Array(2)].map((_, index) => (
					<BagItem key={index} />
				))}
			</div>
		</div>
	)
}
