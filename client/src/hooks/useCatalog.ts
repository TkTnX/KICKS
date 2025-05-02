import { useQuery } from "@tanstack/react-query"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import productsService from "@/services/products.service"

export function useCatalog() {
	const searchParams = useSearchParams()
	const [prices, setPrices] = useState([0, 0])
	const params = Object.fromEntries(searchParams.entries())
	const pathname = usePathname()
	const category = pathname.split("/")[2]
	const limit = 9
	const page = Number(searchParams.get("page")) || 1
	const skip = useMemo(() => (page - 1) * limit, [page])

	// ПОЛУЧЕНИЕ ПРОДУКТОВ
	const {
		data: products,
		error,
		isLoading
	} = useQuery({
		queryKey: ["catalog", page, params, skip],
		queryFn: () =>
			productsService.getProducts(limit, {
				...params,
				category,
				skip: skip.toString()
			})
	})

	// ПОЛУЧЕНИЕ КОЛИЧЕСТВА СТРАНИЦ
	const { data: pages } = useQuery({
		queryKey: ["catalog pages"],
		queryFn: () => productsService.countPages(limit)
	})

	// ПОЛУЧЕНИЕ МИНИМАЛЬНОЙ И МАКСИМАЛЬНОЙ ЦЕНЫ
	useEffect(() => {
		if (products) {
			const prices = products.map(product => product.price)
			const minPrice = Math.min(...prices)
			const maxPrice = Math.max(...prices)
			setPrices([minPrice, maxPrice])
		}
	}, [products])

	// ПОЛУЧЕНИЕ ДОСТУПНЫХ РАЗМЕРОВ
	const availableSizes = products?.flatMap(product =>
		product.sizes.map(size => size.size)
	)

	// ПОЛУЧЕНИЕ ДОСТУПНЫХ ЦВЕТОВ
	const availableColors = products
		?.flatMap(product => product.colors.map(color => color.value))
		.filter((color, index, self) => self.indexOf(color) === index)
	return {
		products,
		pages,
		page,
		isLoading,
		error,
		prices,
		availableSizes,
		availableColors
	}
}
