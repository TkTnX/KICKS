import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import reviewsService from "@/services/reviews.service"

import { useUserStore } from "@/stores/userStore"
import { ERole } from "@/types"

type Props = {
	reviewId: string
	reviewAuthorId: string
}

export const DeleteReviewButton = ({ reviewId, reviewAuthorId }: Props) => {
	const { user } = useUserStore()
	const router = useRouter()
	const queryClient = useQueryClient()
	const mutation = useMutation({
		mutationFn: () => reviewsService.delete(reviewId),
		onSuccess: () => {
			toast.success("Deleted!")
			queryClient.invalidateQueries({ queryKey: ["reviews"] })
			router.refresh()
		},
		onError: err => {
			console.log(err)
			toast.error(err.message)
		}
	})

	if (reviewAuthorId !== user?.id && user?.role !== ERole.ADMIN) return null

	return (
		<button
			onClick={() => mutation.mutate()}
			className='absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition hover:opacity-60'
		>
			<Trash />
		</button>
	)
}
