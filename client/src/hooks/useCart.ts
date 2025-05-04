import { useQuery } from "@tanstack/react-query"

import cartService from "@/services/cart.service"

export function useCart() {
	const {
		data: cart,
		isLoading,
		error
	} = useQuery({
		queryKey: ["cart"],
		queryFn: () => cartService.getCart()
	})

	const categories = cart?.cartItems.flatMap(
		item => item.product.category.slug
	)

	return {
		cart,
		isLoading,
		error,
		categories
	}
}
