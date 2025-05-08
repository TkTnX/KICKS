"use client"

import { useForm } from "react-hook-form"

import { Form } from "@/components/ui/form"

import { ProductInputs } from "./ProductInputs"

export const ProductForm = () => {
	const form = useForm()
	return (
		<div className='bg-white rounded-2xl p-6 mt-6'>
			<Form {...form}>
				<form>
					<ProductInputs form={form} />
				</form>
			</Form>
		</div>
	)
}
