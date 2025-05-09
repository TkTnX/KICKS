"use client"

import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { ProductGallery } from "@/components/features/ProductGallery"
import { Form } from "@/components/ui/form"

import { useProductForm } from "@/hooks/useProductForm"

import productsService from "@/services/products.service"

import { ProductInputs } from "./ProductInputs"
import { IProductInput } from "./productInput.interface"
import { IProduct } from "@/types"

export const ProductForm = ({ product }: { product: IProduct }) => {
	const form = useForm<IProductInput>()
	const router = useRouter()
	const { store } = useProductForm(product)

	const onSubmit = async (data: IProductInput) => {
		try {
			const body = {
				...data,
				categoryId: store.categoryId,
				colors: store.colorIds,
				sizes: store.sizeIds,
				images: store.images,
				price: Number(data.price)
			}
			const res = await productsService.edit(body, product.id)
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

	return (
		<div className='bg-white rounded-2xl p-6 mt-6'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col lg:flex-row items-start gap-14'
				>
					<ProductInputs product={product} form={form} />
					<ProductGallery product={product} form={form} />
				</form>
			</Form>
		</div>
	)
}
