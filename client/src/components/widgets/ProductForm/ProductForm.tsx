"use client"

import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { ProductGallery } from "@/components/features/ProductGallery"
import { Form } from "@/components/ui/form"

import { useProductForm } from "@/hooks/useProductForm"

import productsService from "@/services/products.service"

import { ProductInputs } from "./ProductInputs"
import { IProductInput } from "./productInput.interface"

export const ProductForm = ({ productId }: { productId: string }) => {
	const form = useForm<IProductInput>()
	const router = useRouter()
	const {
		data: product,
		isLoading,
		error
	} = useQuery({
		queryKey: ["product", productId],
		queryFn: () => productsService.getById(productId)
	})
	const { store } = useProductForm(product)

	if (!product && !isLoading)
		<ErrorMessage type={"Product"} error={error?.message} />
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
			await productsService.edit(body, product?.id!)
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

	if (isLoading)
		return (
			<div className='flex items-center justify-center my-10'>
				<Loader2 className='animate-spin' />
			</div>
		)

	return (
		<div className='bg-white rounded-2xl p-6 mt-6'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col lg:flex-row items-start gap-14'
				>
					<ProductInputs product={product!} form={form} />
					<ProductGallery product={product!} form={form} />
				</form>
			</Form>
		</div>
	)
}
