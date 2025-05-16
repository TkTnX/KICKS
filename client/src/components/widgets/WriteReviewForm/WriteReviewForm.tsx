"use client"

import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { UploadInput } from "@/components/features/ProductGallery/UploadInput"
import { ProductInput } from "@/components/ui/ProductInput"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

import reviewsService from "@/services/reviews.service"

import { ChooseRating } from "./ChooseRating"
import { IProduct, IReviewInput } from "@/types"

type Props = {
	product: IProduct
}

export const WriteReviewForm = ({ product }: Props) => {
	const router = useRouter()
	const [images, setImages] = useState<string[]>([])

	const [rating, setRating] = useState<null | number>(null)
	const form = useForm<IReviewInput>()

	// * TODO: Добавление отзывов
	// * TODO: Удаление отзывов
	// * TODO: Вывод отзывов в dashboard
	// * TODO: Вывод отзывы продукта

	const onSubmit = async (data: IReviewInput) => {
		try {
			if (!rating) return toast.error("Rating is required!")
			const body = {
				...data,
				rating,
				image: images[images.length - 1]
			}
			const res = await reviewsService.create(body, product.id)
			toast.success("Created!")
			return router.push("/profile/reviews")
		} catch (error) {
			console.log(error)
			if (error instanceof AxiosError) {
				return toast.error(error.response?.data.message[0])
			}
			return toast.error("Something went wrong!")
		}
	}

	return (
		<Form {...form}>
			<form
				className='bg-white p-4 rounded-lg flex flex-col gap-2 flex-1'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<UploadInput
					folder='reviews'
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
