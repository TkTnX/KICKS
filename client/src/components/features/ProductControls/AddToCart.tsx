"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import { Button } from "@/components/ui/button"

import { useCart } from "@/hooks/useCart"

import cartItemService from "@/services/cartItem.service"

import { cn } from "@/lib/utils"
import { useCartStore } from "@/stores/cartStore"

type Props = {
	productId: string
	className?: string
	type?: "add" | "buy"
	children: React.ReactNode
}

export const AddToCart = ({
	productId,
	className,
	type = "add",
	children
}: Props) => {
	const { cart } = useCart()
	const { color, size } = useCartStore()
	const router = useRouter()
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
			if (type === "buy") return router.push("/cart")
		}
	})

	return (
		<Button
			disabled={mutation.isPending}
			onClick={() => mutation.mutate()}
			className={cn(
				"bg-dark-gray  uppercase text-white py-4 flex-1 font-sans",
				className
			)}
		>
			{children}
		</Button>
	)
}
