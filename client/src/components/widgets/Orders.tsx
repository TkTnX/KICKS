"use client"

import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { OrdersList } from "@/components/widgets/OrdersList"

import orderService from "@/services/order.service"

export const Orders = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["orders"],
		queryFn: () => orderService.getAll()
	})

	if (isLoading)
		return (
			<div className='w-full flex justify-center'>
				<Loader2 className='animate-spin' />
			</div>
		)

	if (error) return <ErrorMessage type='orders' error={error.message} />
	if (data?.length === 0)
		return <div className='text-center text-2xl'>No orders yet!</div>
	return (
		<div className='bg-[#f8f8f8] rounded-xl py-6 px-4 w-full'>
			<div className='border-b pb-4'>
				<h2 className='font-sans font-semibold text-xl'>
					Recent Purchases
				</h2>
			</div>
			<OrdersList orders={data!} />
		</div>
	)
}
