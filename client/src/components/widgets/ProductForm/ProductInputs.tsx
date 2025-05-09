import { UseFormReturn } from "react-hook-form"

import { ProductInput } from "@/components/ui/ProductInput"
import { Textarea } from "@/components/ui/textarea"

import { ChooseProductColors } from "./ChooseProductColors"
import { ChooseProductSizes } from "./ChooseProductSizes"
import { ProductCategorySelect } from "./ProductCategorySelect"
import { IProductInput } from "./productInput.interface"
import { IProduct } from "@/types"

type Props = { form: UseFormReturn<IProductInput>; product: IProduct }

export const ProductInputs = ({ form, product }: Props) => {
	return (
		<div className='grid gap-6 flex-1 w-full'>
			<ProductInput
				label='Product Name'
				name='title'
				defaultValue={product.title}
				formItem={form}
				placeholder='Adidas Ultra boost...'
			/>
			{/* TODO: Переделать в textarea */}
			<label>
				<span className='text-xl font-sans font-semibold'>
					Description
				</span>

				<Textarea
					{...form.register("description")}
					name='description'
					defaultValue={product.description}
					placeholder='Lorem ipsum...'
				/>
			</label>
			<ProductCategorySelect
				formItem={form}
				defaultCategory={product.category.id}
				label='Category'
			/>
			<ChooseProductSizes label='Sizes' />
			<ChooseProductColors label='Colors' />
			<ProductInput
				defaultValue={product.price}
				label='Price'
				name='price'
				formItem={form}
				placeholder='$999'
				type='number'
			/>
		</div>
	)
}
