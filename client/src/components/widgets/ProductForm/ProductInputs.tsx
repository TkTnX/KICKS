import { UseFormReturn } from "react-hook-form"

import { ProductInput } from "@/components/ui/ProductInput"

import { ChooseProductColors } from "./ChooseProductColors"
import { ChooseProductSizes } from "./ChooseProductSizes"
import { ProductCategorySelect } from "./ProductCategorySelect"
import { IProductInput } from "./productInput.interface"

export const ProductInputs = ({ form }: { form: UseFormReturn<IProductInput> }) => {
	return (
		<div className='grid gap-6 flex-1 w-full'>
			<ProductInput
				label='Product Name'
				name='title'
				formItem={form}
				placeholder='Adidas Ultra boost...'
			/>
			{/* Переделать в textarea */}
			<ProductInput
				label='Description'
				name='description'
				formItem={form}
				placeholder='Lorem ipsum...'
			/>
			<ProductCategorySelect label='Category' />
			<ChooseProductSizes label='Sizes' />
			<ChooseProductColors label='Colors' />
			<ProductInput
				label='Price'
				name='price'
				formItem={form}
				placeholder='$999'
				type='number'
			/>
		</div>
	)
}
