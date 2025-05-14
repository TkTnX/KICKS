import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import categoriesService from "@/services/categories.service"

export const DeleteColorButton = ({ colorId }: { colorId: string }) => {
	const router = useRouter()
	const queryClient = useQueryClient()
	// const mutation = useMutation({
	// 	mutationFn: () => categoriesService.deleteCategory(colorId),
	// 	onSuccess: () => {
	// 		router.refresh()
	// 		queryClient.invalidateQueries({ queryKey: ["categories"] })
	// 		toast.success("Deleted!")
	// 	},
	// 	onError: err => {
	// 		console.log(err)
	// 		toast.error(err.message)
	// 	}
	// })

	return <button className='p-2'>Delete Color</button>
}
