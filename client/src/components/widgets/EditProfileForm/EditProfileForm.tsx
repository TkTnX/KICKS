"use client"

import { AxiosError } from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { UploadInput } from "@/components/features/ProductGallery/UploadInput"
import { ProductInput } from "@/components/ui/ProductInput"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { useAuth } from "@/hooks/useAuth"

import userService from "@/services/user.service"

import { ChooseGender } from "./ChooseGender"
import { useUserStore } from "@/stores/userStore"
import { EGender, IUserInput } from "@/types"

export const EditProfileForm = () => {
	const { user } = useUserStore()
	const { getMe, setUser } = useAuth()

	const [images, setImages] = useState<string[]>([])
	const [selectedGender, setSelectedGender] = useState<EGender>(
		user?.gender as EGender
	)
	const router = useRouter()

	const form = useForm<IUserInput>()

	const onSubmit = async (data: IUserInput) => {
		try {
			const body = {
				name: data.name,
				email: data.email,
				image: images[images.length - 1],
				gender: selectedGender
			}

			const res = await userService.edit(body)
			toast.success("Updated!")
			const user = await getMe()
			setUser(user)
			router.push("/profile")
		} catch (error) {
			console.log(error)
			if (error instanceof AxiosError) {
				toast.error(error.message)
			}
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex items-center w-full justify-between gap-4'
			>
				<label className='cursor-pointer'>
					<div className='flex items-center justify-center flex-col'>
						<span className='text-2xl font-sans font-semibold'>
							Avatar
						</span>
						<Image
							width={100}
							height={100}
							className='object-cover rounded-full mt-4'
							alt={user?.name || "avatar"}
							src={
								(user &&
									user.image &&
									`${process.env.NEXT_PUBLIC_BACKEND_URL}${user?.image}`) ||
								"/images/no-avatar.jpg"
							}
						/>
					</div>
					<UploadInput
						form={form}
						folder='avatars'
						images={images}
						setImages={setImages}
					/>
				</label>
				<div className='flex-1 flex flex-col gap-4'>
					<ProductInput
						formItem={form}
						name='name'
						placeholder='Your name'
						defaultValue={user?.name}
						label='Name'
					/>
					<ProductInput
						formItem={form}
						name='email'
						placeholder='Your Email'
						defaultValue={user?.email}
						label='Email'
					/>
					<ChooseGender
						setSelectedGender={setSelectedGender}
						selectedGender={selectedGender}
					/>
					<Button className='mt-4 w-full bg-blue hover:bg-blue/70'>
						Update
					</Button>
				</div>
			</form>
		</Form>
	)
}
