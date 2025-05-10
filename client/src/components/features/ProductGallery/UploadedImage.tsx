import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Check, X } from "lucide-react"
import Image from "next/image"
import { toast } from "react-toastify"

import imageService from "@/services/image.service"

import { cn } from "@/lib/utils"

type Props = { totalImages: number; image: string; productId: string }

export const UploadedImage = ({ totalImages, image, productId }: Props) => {
	const queryClient = useQueryClient()
	const mutation = useMutation({
		mutationFn: () => imageService.delete(image),
		onSuccess: () => {
			toast.success("Deleted!")
			queryClient.invalidateQueries({ queryKey: ["product", productId] })
		},
		onError: err => {
			toast.error(err.message)
		}
	})

	return (
		<div className='rounded-lg p-4 bg-[#fafafa] flex items-center gap-4 justify-between'>
			<Image
				src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
				alt='image'
				width={64}
				height={64}
				className='rounded-lg object-cover w-[64px] h-[64px]'
			/>
			<p className='text-xs'>{image.split("/")[3]}</p>
			<button
				type='button'
				disabled={totalImages <= 1}
				onClick={() => mutation.mutate()}
				className={cn(
					"bg-blue max-w-[32px] max-h-[32px] rounded-full flex items-center justify-center hover:bg-red-500 group transition relative",
					{ "hover:bg-blue": totalImages <= 1 }
				)}
			>
				<Check
					color='#fff'
					className={cn("group-hover:opacity-0 transition", {
						"group-hover:opacity-100": totalImages <= 1
					})}
				/>
				{totalImages > 1 && (
					<X
						color='#fff'
						className='opacity-0 group-hover:opacity-100 absolute transition'
					/>
				)}
			</button>
		</div>
	)
}
