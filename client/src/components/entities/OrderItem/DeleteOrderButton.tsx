"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { X } from "lucide-react"
import { usePathname } from "next/navigation"
import { toast } from "react-toastify"

import orderService from "@/services/order.service"

export const DeleteOrderButton = ({ orderId }: { orderId: string }) => {
	const queryClient = useQueryClient()
	const pathname = usePathname()
	const mutation = useMutation({
		mutationFn: () => orderService.deleteOrder(orderId),
		onSuccess: () => {
			toast.success("Deleted!")
			queryClient.invalidateQueries({ queryKey: ["orders", pathname] })
		},
		onError: err => toast.error(err.message)
	})

	return (
		<button
			onClick={() => mutation.mutate()}
			disabled={mutation.isPending}
			className='absolute right-10 hover:opacity-60  transition disabled:opacity-50 disabled:pointer-events-none'
		>
			<X />
		</button>
	)
}
