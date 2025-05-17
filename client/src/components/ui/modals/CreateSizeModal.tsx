"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";



import sizeService from "@/services/size.service";



import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from "../alert-dialog";
import { Button } from "../button";
import { Input } from "../input";





type Props = {
	children: React.ReactNode
}

export const CreateSizeModal = ({ children }: Props) => {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const mutation = useMutation({
		mutationFn: (size: string) => sizeService.create(size),
		onSuccess: () => {
			toast.success("Created!")
			setOpen?.(false)
			router.refresh()
		},
		onError: err => {
			toast.error(err.message)
		}
	})

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

	

		mutation.mutate(formData.get('size') as string)
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogTitle>Create a size</AlertDialogTitle>
				<form onSubmit={handleSubmit}>
					<label className='flex flex-col gap-2 w-full'>
						<span>Size</span>
						<Input
							type='number'
							name='size'
							placeholder='36'
							className='border border-dark-gray'
						/>
					</label>
					<Button className='w-full mt-2 font-sans bg-blue hover:bg-blue/70'>
						Create
					</Button>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}