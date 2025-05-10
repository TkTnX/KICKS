import { UseFormReturn } from "react-hook-form"

import { ProductInput } from "@/components/ui/ProductInput"
import { Textarea } from "@/components/ui/textarea"

import { ChooseProductColors } from "./ChooseProductColors"
import { ChooseProductSizes } from "./ChooseProductSizes"
import { ProductCategorySelect } from "./ProductCategorySelect"
import { IProductInput } from "./productInput.interface"
import { IProduct } from "@/types"

type Props = {
	form: UseFormReturn<IProductInput>
	product: IProduct | null
	isLoading: boolean
}

export const ProductInputs = ({ form, product, isLoading }: Props) => {
	return (
		<div className='grid gap-6 flex-1 w-full'>
			<ProductInput
				disabled={isLoading}
				label='Product Name'
				name='title'
				defaultValue={product?.title || ""}
				formItem={form}
				placeholder='Adidas Ultra boost...'
			/>
			<label className='flex flex-col gap-4'>
				<span className='text-xl font-sans font-semibold'>
					Description
				</span>

				<Textarea
					disabled={isLoading}
					{...form.register("description")}
					name='description'
					defaultValue={product?.description || ""}
					placeholder='Lorem ipsum...'
					className='disabled:opacity-50 disabled:pointer-events-none'
				/>
			</label>
			<ProductCategorySelect
				isLoading={isLoading}
				formItem={form}
				defaultCategory={product?.category.id || ""}
				label='Category'
			/>
			<ChooseProductSizes isLoading={isLoading} label='Sizes' />
			<ChooseProductColors isLoading={isLoading} label='Colors' />
			<ProductInput
				disabled={isLoading}
				defaultValue={product?.price || ""}
				label='Price'
				name='price'
				formItem={form}
				placeholder='$999'
				type='number'
			/>
		</div>
	)
}
