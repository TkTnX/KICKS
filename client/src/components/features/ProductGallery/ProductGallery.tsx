import { Check, ImageIcon, X } from "lucide-react"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { UseFormReturn } from "react-hook-form"

import { FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { IProductInput } from "@/components/widgets/ProductForm/productInput.interface"

import { useProductForm } from "@/hooks/useProductForm"

import imageService from "@/services/image.service"

import { ProductEditButtons } from "../ProductEditButtons"

import { UploadedImage } from "./UploadedImage"
import { IProduct } from "@/types"

type Props = {
	form: UseFormReturn<IProductInput>
	product: IProduct
}

export const ProductGallery = ({ form, product }: Props) => {
	const [images, setImages] = useState<string[]>([])
	// TODO: Выводить все изображения в gallery
	// TODO: Возможность удалять изображения
	// TODO: Сделать лимит по изображениям - 4 штуки
	const { store } = useProductForm()

	const onSetImage = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return
		const image = await imageService.upload(file, "products")

		setImages([...images, image.path])

		store.setImages([...store.images, image.path])
	}

	console.log(product)

	return (
		<div className='flex-1 w-full'>
			{
				<div className='w-full h-[400px] relative'>
					<Image
						alt='image'
						fill
						src={
							images.length
								? `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]}`
								: `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0]}`
						}
						className='object-cover rounded-lg'
					/>
				</div>
			}
			<div className='mt-6'>
				<h4 className='text-xl font-semibold font-sans'>
					Product Gallery
				</h4>
				<FormField
					control={form.control}
					name={"images"}
					render={() => (
						<FormItem className='mt-4'>
							<label className='cursor-pointer'>
								<div className='border border-dashed border-dark-gray rounded-lg p-4 flex flex-col gap-4 items-center justify-center text-center'>
									<ImageIcon color='#4a69e2' size={64} />
									<p className='opacity-80'>
										Drop your imager here, or browse <br />{" "}
										Jpeg, png are allowed
									</p>
								</div>
								<Input
									hidden
									{...form.register("images")}
									onChange={onSetImage}
									type='file'
								/>
							</label>
						</FormItem>
					)}
				/>
			</div>
			<div className='mt-6 flex flex-col gap-3'>
				{product.images.map((image, index) => (
					<UploadedImage image={image} key={index} />
				))}
			</div>
			<ProductEditButtons productId={product.id} />
		</div>
	)
}
