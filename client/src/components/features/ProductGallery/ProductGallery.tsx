import { Check, ImageIcon, X } from "lucide-react"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { UseFormReturn } from "react-hook-form"

import { FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { IProductInput } from "@/components/widgets/ProductForm/productInput.interface"

import { useProductForm } from "@/hooks/useProductForm"

import { ProductEditButtons } from "../ProductEditButtons"

import { IProduct } from "@/types"

type Props = {
	form: UseFormReturn<IProductInput>
	product: IProduct
}

export const ProductGallery = ({ form, product }: Props) => {
	const [images, setImages] = useState<{ result: string; name: string }[]>([])
	const { store } = useProductForm()
	const [lastAdded, setLastAdded] = useState<string | null>(product.images[0])

	const onSetImage = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		const reader = new FileReader()
		store.setImages(file)
		reader.onloadend = () => {
			setLastAdded(reader.result as string)
			setImages(prev => [
				...prev,
				{ name: file.name, result: reader.result as string }
			])
		}
		reader.readAsDataURL(file)
	}

	return (
		<div className='flex-1 w-full'>
			{lastAdded ? (
				<div className='w-full h-[400px] relative'>
					<Image
						alt='image'
						fill
						src={
							!images.length
								? `${process.env.NEXT_PUBLIC_BACKEND_URL}${lastAdded}`
								: lastAdded
						}
						className='object-cover rounded-lg'
					/>
				</div>
			) : (
				""
			)}
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
					<div
						className='rounded-lg p-4 bg-[#fafafa] flex items-center gap-4 justify-between'
						key={index}
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
							alt='image'
							width={64}
							height={64}
							className='rounded-lg object-cover w-[64px] h-[64px]'
						/>
						<p>{image}</p>
						<button className='bg-blue w-[32px] h-[32px] rounded-full flex items-center justify-center hover:bg-red-500 group transition relative'>
							<Check
								color='#fff'
								className='group-hover:opacity-0 transition'
							/>
							<X
								color='#fff'
								className='opacity-0 group-hover:opacity-100 absolute transition'
							/>
						</button>
					</div>
				))}
			</div>
			<ProductEditButtons productId={product.id} />
		</div>
	)
}
