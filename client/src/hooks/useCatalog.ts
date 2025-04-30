import { useQuery } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import productsService from "@/services/products.service"

export function useCatalog() {
	const searchParams = useSearchParams()
	const [prices, setPrices] = useState([0, 0])
	const params = Object.fromEntries(searchParams.entries())

	// ПОЛУЧЕНИЕ ПРОДУКТОВ
	const {
		data: products,
		error,
		isLoading
	} = useQuery({
		queryKey: ["catalog", params],
		queryFn: () => productsService.getProducts(9, params)
	})

	useEffect(() => {
		if (products) {
			const prices = products.map(product => product.price)
			const minPrice = Math.min(...prices)
			const maxPrice = Math.max(...prices)
			setPrices([minPrice, maxPrice])
		}
	}, [products])

	return useMemo(
		() => ({
			products,
			isLoading,
			error,
			prices
		}),
		[params]
	)
}
