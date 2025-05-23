"use client"

import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { OrdersList } from "@/components/widgets/OrdersList"

import orderService from "@/services/order.service"

export const Orders = ({ limit }: { limit?: number }) => {
	const pathname = usePathname()
	const { data, isLoading, error } = useQuery({
		queryKey: ["orders", pathname],
		queryFn: async () => {
			if (pathname.includes("dashboard")) {
				return orderService.getAll(limit)
			} else {
				return orderService.getAllByUserId()
			}
		}
	})

	if (error) return <ErrorMessage type='orders' error={error.message} />
	if (data?.length === 0)
		return <div className='text-center text-2xl'>No orders yet!</div>
	return (
		<div className='bg-[#f8f8f8] rounded-xl py-6 px-4 w-full mt-6'>
			<div className='border-b pb-4'>
				<h2 className='font-sans font-semibold text-xl'>
					Recent Purchases
				</h2>
			</div>
			<OrdersList isLoading={isLoading} orders={data!} />
		</div>
	)
}
