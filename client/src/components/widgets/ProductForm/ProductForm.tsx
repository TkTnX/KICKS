"use client"

import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { ProductGallery } from "@/components/features/ProductGallery"
import { Form } from "@/components/ui/form"

import { ProductInputs } from "./ProductInputs"
import { IProductInput } from "./productInput.interface"
import { IProduct } from "@/types"

export const ProductForm = ({ product }: { product: IProduct }) => {
	// TODO: Продолжать доделывать изменение продукта
	const form = useForm<IProductInput>()

	const onSubmit = async (data: IProductInput) => {
		try {
			console.log(data)
		} catch (error) {
			console.log(error)
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
					<ProductInputs form={form} />
					<ProductGallery productId={product.id} form={form} />
				</form>
			</Form>
		</div>
	)
}
