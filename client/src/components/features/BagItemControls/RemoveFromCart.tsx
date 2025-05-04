"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Trash2 } from "lucide-react"
import { toast } from "react-toastify"

import cartItemService from "@/services/cartItem.service"

export const RemoveFromCart = ({ id }: { id: string }) => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: () => cartItemService.removeFromCart(id),
		onError: err => toast.error(err.message),
		onSuccess: () => {
			toast.success("Removed from cart!")
			queryClient.invalidateQueries({ queryKey: ["cart"] })
		}
	})

	return (
		<button
			onClick={() => mutation.mutate()}
			className='hover:opacity-50 transition'
		>
			<Trash2 size={32} strokeWidth={1} />
		</button>
	)
}
