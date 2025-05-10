import { useEffect } from "react"

import { useProductFormStore } from "@/stores/productFormStore"
import { IProduct } from "@/types"

export function useProductForm(product?: IProduct) {
	const store = useProductFormStore()

	useEffect(() => {
		if (product) {
			store.setCategoryId(product.category.id)
			store.setColorIds(product.colors.flatMap(color => color.id))
			store.setSizeIds(product.sizes.flatMap(size => size.id))
		}
	}, [product])

	return {
		store
	}
}
