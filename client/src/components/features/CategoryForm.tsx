"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"

import categoriesService from "@/services/categories.service"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { ICategory } from "@/types"

type Props = {
	setOpen?: (bool: boolean) => void
	category?: ICategory
}

export const CategoryForm = ({ setOpen, category }: Props) => {
	const router = useRouter()
	const [name, setName] = useState("")
	const mutation = useMutation({
		mutationFn: (name: string) =>
			category
				? categoriesService.editCategory(name, category.id)
				: categoriesService.createCategory(name),
		onSuccess: () => {
			toast.success(category ? "Edited!" : "Created!")
			setOpen?.(false)
			if (category) {
				router.push("/dashboard/categories")
			} else {
				router.refresh()
			}
			setName("")
		},
		onError: err => {
			toast.error(err.message)
		}
	})

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		mutation.mutate(name)
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<label>
				<span className='text-sm font-sans opacity-80'>Name</span>
				<Input
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder={category ? category.name : "Category name..."}
					className='border-b border-b-dark-gray/30 rounded-none'
				/>
			</label>

			<Button
				disabled={name === ""}
				className='font-sans w-full bg-blue mt-4 disabled:pointer-events-none disabled:opacity-50'
			>
				{category ? "Edit" : "Create"}
			</Button>
		</form>
	)
}
