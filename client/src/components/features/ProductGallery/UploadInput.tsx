import { ImageIcon } from "lucide-react"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { UseFormReturn } from "react-hook-form"

import { FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { IProductInput } from "@/components/widgets/ProductForm/productInput.interface"

import { useProductForm } from "@/hooks/useProductForm"

import imageService from "@/services/image.service"

import { IProduct } from "@/types"

type Props = {
	form: UseFormReturn<IProductInput>
	setImages: Dispatch<SetStateAction<string[]>>
	images: string[]
	product: IProduct | null
}

export const UploadInput = ({ form, setImages, images, product }: Props) => {
	const { store } = useProductForm()
	const onSetImage = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return
		let image
		if (product) {
			image = await imageService.upload(file, "products", product.id)
		} else {
			image = await imageService.upload(file, "products")
			store.setImages([...store.images, image.path])
		}
		setImages([...images, image.path])
	}

	return (
		<FormField
			control={form.control}
			name={"images"}
			render={() => (
				<FormItem className='mt-4'>
					<label className='cursor-pointer'>
						<div className='border border-dashed border-dark-gray rounded-lg p-4 flex flex-col gap-4 items-center justify-center text-center'>
							<ImageIcon color='#4a69e2' size={64} />
							<p className='opacity-80'>
								Drop your imager here, or browse <br /> Jpeg,
								png are allowed
							</p>
						</div>
						<Input
							accept='image/*'
							hidden
							{...form.register("images")}
							onChange={onSetImage}
							type='file'
						/>
					</label>
				</FormItem>
			)}
		/>
	)
}
