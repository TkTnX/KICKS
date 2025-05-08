import { UseFormReturn } from "react-hook-form"

import { ProductInput } from "@/components/ui/ProductInput"

import { ChooseProductSizes } from "./ChooseProductSizes"
import { ProductCategorySelect } from "./ProductCategorySelect"

export const ProductInputs = ({ form }: { form: UseFormReturn }) => {
	return (
		<div className='grid gap-6'>
			<ProductInput
				label='Product Name'
				name='title'
				formItem={form}
				placeholder='Adidas Ultra boost...'
			/>
			<ProductInput
				label='Description'
				name='description'
				formItem={form}
				placeholder='Lorem ipsum...'
			/>
			<ProductCategorySelect label='Category' />
			<ChooseProductSizes label='Sizes' />
		</div>
	)
}
