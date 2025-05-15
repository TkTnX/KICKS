import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import colorService from "@/services/color.service"

export const DeleteColorButton = ({ colorId }: { colorId: string }) => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const mutation = useMutation({
		mutationFn: () => colorService.deleteColor(colorId),
		onSuccess: () => {
			router.refresh()
			queryClient.invalidateQueries({ queryKey: ["colors"] })
			toast.success("Deleted!")
		},
		onError: err => {
			console.log(err)
			toast.error(err.message)
		}
	})

	return (
		<button onClick={() => mutation.mutate()} className='p-2'>
			Delete Color
		</button>
	)
}
