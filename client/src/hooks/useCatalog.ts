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
	const [pages, setPages] = useState(2)
	const [page, setPage] = useState(1)
	const skip = (page - 1) * limit

	// ПОЛУЧЕНИЕ ПРОДУКТОВ
	const {
		data: products,
		error,
		isLoading
	} = useQuery({
		queryKey: ["catalog", params],
		queryFn: () =>
			productsService.getProducts(limit, skip, {
				...params,
				category
			})
	})

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

	return useMemo(
		() => ({
			products,
			pages,
			page,
			setPage,
			isLoading,
			error,
			prices,
			availableSizes,
			availableColors
		}),
		[params]
	)
}
