import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

import { Button } from "@/components/ui/button"

import productsService from "@/services/products.service"

export const ProductEditButtons = ({ productId }: { productId: string }) => {
	const router = useRouter()
	const mutation = useMutation({
		mutationFn: () => productsService.deleteProduct(productId),
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
				UPDATE
			</Button>
			<Button
				onClick={() => mutation.mutate()}
				type='button'
				className='font-sans uppercase text-sm flex-1 h-auto py-4 bg-red-500 hover:bg-red-500/70'
			>
				DELETE
			</Button>
			<Link
				href={"/dashboard"}
				className='block text-center border rounded-lg font-sans uppercase text-sm flex-1 h-auto py-4 hover:bg-dark-gray hover:text-white transition'
			>
				CANCEL
			</Link>
		</div>
	)
}
