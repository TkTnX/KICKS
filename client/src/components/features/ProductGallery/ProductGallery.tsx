import Image from "next/image"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"

import { IProductInput } from "@/components/widgets/ProductForm/productInput.interface"

import { ProductEditButtons } from "../ProductEditButtons"

import { UploadInput } from "./UploadInput"
import { UploadedImage } from "./UploadedImage"
import { IProduct } from "@/types"

type Props = {
	form: UseFormReturn<IProductInput>
	product: IProduct | null
}

export const ProductGallery = ({ form, product }: Props) => {
	const [images, setImages] = useState<string[]>([])
	const limitImages = 4
	const imagesLeft =
		limitImages - [...images, ...(product?.images || [])]?.length

	return (
		<div className='flex-1 w-full'>
			{product || images.length ? (
				<div className='w-full h-[400px] relative'>
					<Image
						alt='image'
						fill
						src={
							images.length
								? `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]}`
								: `${process.env.NEXT_PUBLIC_BACKEND_URL}${product?.images[0]}`
						}
					/>
				</div>
			) : (
				""
			)}

			<div className='mt-6'>
				<h4 className='text-xl font-semibold font-sans'>
					Product Gallery
				</h4>
				<p className='text-xs text-red-500'>
					You can add {imagesLeft} more images
				</p>
				{imagesLeft !== 0 && (
					<UploadInput
						folder='products'
						form={form}
						setImages={setImages}
						images={images}
						product={product || null}
					/>
				)}
			</div>
			<div className='mt-6 flex flex-col gap-3'>
				{[...images, ...(product?.images || [])].map((image, index) => (
					<UploadedImage
						totalImages={product?.images.length || 0}
						productId={product?.id || null}
						image={image}
						key={index}
					/>
				))}
			</div>
			<ProductEditButtons productId={product?.id || null} />
		</div>
	)
}
