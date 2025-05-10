"use client"

import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { ProductGallery } from "@/components/features/ProductGallery"
import { Form } from "@/components/ui/form"

import { useProductForm } from "@/hooks/useProductForm"

import productsService from "@/services/products.service"

import { ProductInputs } from "./ProductInputs"
import { IProductInput } from "./productInput.interface"

export const ProductForm = ({ productId }: { productId?: string }) => {
	const form = useForm<IProductInput>()

	const {
		data: product,
		isLoading,
		error
	} = useQuery({
		enabled: !!productId,
		queryKey: ["product", productId],
		queryFn: async () => await productsService.getById(productId!)
	})

	const { onSubmit } = useProductForm(product ? product : null)

	if (!product && !isLoading)
		<ErrorMessage type={"Product"} error={error?.message} />

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
					<ProductInputs
						product={product || null}
						form={form}
						isLoading={isLoading}
					/>
					<ProductGallery product={product || null} form={form} />
				</form>
			</Form>
		</div>
	)
}
