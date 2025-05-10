import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import { Button } from "@/components/ui/button"

import productsService from "@/services/products.service"

export const ProductEditButtons = ({
	productId
}: {
	productId: string | null
}) => {
	const router = useRouter()
	const mutation = useMutation({
		mutationFn: () => productsService.deleteProduct(productId!),
		onSuccess: () => {
			toast.success("Deleted!")
			router.push("/dashboard/products")
		}
	})
	return (
		<div className='flex flex-wrap items-center gap-4 mt-10'>
			<Button
				type='submit'
				className='font-sans uppercase text-sm flex-1 h-auto py-4 '
			>
				{productId ? "UPDATE" : "CREATE"}
			</Button>
			{productId && (
				<Button
					onClick={() => mutation.mutate()}
					type='button'
					className='font-sans uppercase text-sm flex-1 h-auto py-4 bg-red-500 hover:bg-red-500/70'
				>
					DELETE
				</Button>
			)}
			<Button
				type='button'
				onClick={() => router.back()}
				className='block bg-transparent text-dark-gray text-center border rounded-lg font-sans uppercase text-sm flex-1 h-auto py-4 hover:bg-dark-gray hover:text-white transition'
			>
				CANCEL
			</Button>
		</div>
	)
}
