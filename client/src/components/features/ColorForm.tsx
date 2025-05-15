"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import { toast } from "react-toastify"

import colorService from "@/services/color.service"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { IColor, IColorInput } from "@/types"

type Props = {
	setOpen?: (bool: boolean) => void
	color?: IColor
}

export const ColorForm = ({ setOpen, color }: Props) => {
	const router = useRouter()
	const mutation = useMutation({
		mutationFn: (body: IColorInput) =>
			color
				? colorService.editColor(body, color.id)
				: colorService.createColor(body),
		onSuccess: () => {
			toast.success(color ? "Edited!" : "Created!")
			setOpen?.(false)
			if (color) {
				router.push("/dashboard/colors")
			} else {
				router.refresh()
			}
		},
		onError: err => {
			toast.error(err.message)
		}
	})

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

		const body = {
			name: formData.get("name") as string,
			value: formData.get("value") as string
		}

		mutation.mutate(body)
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<label>
				<span className='text-sm font-sans opacity-80'>Name</span>
				<Input
					name='name'
					placeholder={color ? color.name : "Color name..."}
					className='border-b border-b-dark-gray/30 rounded-none'
				/>
			</label>
			<label>
				<span className='text-sm font-sans opacity-80'>HEX Code</span>
				<Input
					name='value'
					placeholder={color ? color.value : "#000"}
					className='border-b border-b-dark-gray/30 rounded-none'
				/>
			</label>

			<Button
				disabled={mutation.isPending}
				className='font-sans w-full bg-blue mt-4 disabled:pointer-events-none disabled:opacity-50'
			>
				{color ? "Edit" : "Create"}
			</Button>
		</form>
	)
}
