import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-toastify"

import { IProductInput } from "@/components/widgets/ProductForm/productInput.interface"

import productsService from "@/services/products.service"

import { useProductFormStore } from "@/stores/productFormStore"
import { IProduct } from "@/types"
import { AxiosError } from "axios"

export function useProductForm(product?: IProduct | null) {
	const store = useProductFormStore()
	const router = useRouter()
	useEffect(() => {
		if (product) {
			store.setCategoryId(product.category.id)
			store.setColorIds(product.colors.flatMap(color => color.id))
			store.setSizeIds(product.sizes.flatMap(size => size.id))
		}
	}, [product])

	// SUBMIT

	const onSubmit = async (data: IProductInput) => {
		try {
			const body = {
				...data,
				categoryId: store.categoryId,
				colors: store.colorIds,
				sizes: store.sizeIds,
				images: store.images.length ? store.images : null,
				price: Number(data.price)
			}
			product
				? await productsService.edit(body, product?.id!)
				: await productsService.create(body)
			toast.success("Successful update!")
			return router.push("/dashboard/products")
		} catch (error) {
			console.log(error)
			if (error instanceof AxiosError) {
				return toast.error(error.response?.data.message[0])
			}

			toast.error("Unexpected error!")
		}
	}

	return {
		store,
		onSubmit
	}
}
