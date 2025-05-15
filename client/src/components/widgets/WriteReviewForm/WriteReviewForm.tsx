"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

import { UploadInput } from "@/components/features/ProductGallery/UploadInput"
import { ProductInput } from "@/components/ui/ProductInput"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

import { ChooseRating } from "./ChooseRating"
import { IProduct, IReviewInput } from "@/types"

type Props = {
	product: IProduct
}

export const WriteReviewForm = ({ product }: Props) => {
	const [images, setImages] = useState<string[]>([])

	const [rating, setRating] = useState<null | number>(null)
	const form = useForm<IReviewInput>()

	const onSubmit = async (data: IReviewInput) => {
		const body = { ...data, rating, image: images[0] }

		console.log(body)
	}

	return (
		<Form {...form}>
			<form
				className='bg-white p-4 rounded-lg flex flex-col gap-2 flex-1'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<UploadInput
					folder='reviews'
					form={form}
					setImages={setImages}
					images={images}
					product={product || null}
				/>
				<ProductInput
					formItem={form}
					label='Title'
					name='title'
					placeholder='Title...'
				/>
				<label>
					<span className='text-xl font-sans font-semibold'>
						Text
					</span>
					<Textarea
						{...form.register("text")}
						name='text'
						placeholder='Lorem ipsum...'
						className='disabled:opacity-50 disabled:pointer-events-none'
					/>
				</label>
				<ChooseRating rating={rating} setRating={setRating} />

				<Button>Publish</Button>
			</form>
		</Form>
	)
}
