"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { Button } from "@/components/ui/button"

import { useCart } from "@/hooks/useCart"

import cartItemService from "@/services/cartItem.service"

import { useCartStore } from "@/stores/cartStore"

export const AddToCart = ({ productId }: { productId: string }) => {
	const { cart } = useCart()
	const { color, size } = useCartStore()
	const body = {
		productId,
		cartId: cart?.id ?? "",
		sizeId: color ?? "",
		colorId: size ?? ""
	}
	const queryClient = useQueryClient()
	const mutation = useMutation({
		mutationFn: () => cartItemService.addToCart(body),
		onError: error => toast.error(error.message),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["cart"] })
			toast.success("Added to cart!")
		}
	})

	return (
		<Button
			disabled={mutation.isPending}
			onClick={() => mutation.mutate()}
			className='bg-dark-gray  uppercase text-white py-4 flex-1 font-sans'
		>
			ADD TO CART
		</Button>
	)
}
