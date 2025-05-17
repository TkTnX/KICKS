"use client"

import { useMutation } from "@tanstack/react-query"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import sizeService from "@/services/size.service"

export const DeleteSizeButton = ({ sizeId }: { sizeId: string }) => {
	const router = useRouter()
	const mutation = useMutation({
		mutationFn: () => sizeService.delete(sizeId),
		onSuccess: () => {
			router.refresh()
			toast.success("Deleted!")
		},
		onError: err => {
			console.log(err)
			toast.error(err.message)
		}
	})

	return (
		<button
			onClick={() => mutation.mutate()}
			className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition'
		>
			<Trash size={16} />
		</button>
	)
}
