import { Check, ImageIcon } from "lucide-react"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { UseFormReturn } from "react-hook-form"

import { FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { IProductInput } from "@/components/widgets/ProductForm/productInput.interface"

import { ProductEditButtons } from "../ProductEditButtons"

type Props = {
	form: UseFormReturn<IProductInput>
	productId: string
}

export const ProductGallery = ({ form, productId }: Props) => {
	const [images, setImages] = useState<{ result: string; name: string }[]>([])
	const [lastAdded, setLastAdded] = useState<string | null>(null)

	const onSetImage = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		const reader = new FileReader()
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
						src={lastAdded}
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
				{images.map((image, index) => (
					<div
						className='rounded-lg p-4 bg-[#fafafa] flex items-center gap-4 justify-between'
						key={index}
					>
						<Image
							src={image.result}
							alt='image'
							width={64}
							height={64}
							className='rounded-lg object-cover w-[64px] h-[64px]'
						/>
						<p>{image.name}</p>
						<div className='bg-blue w-[32px] h-[32px] rounded-full flex items-center justify-center'>
							<Check color='#fff' />
						</div>
					</div>
				))}
			</div>
			<ProductEditButtons productId={productId} />
		</div>
	)
}
