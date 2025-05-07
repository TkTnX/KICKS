"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { toast } from "react-toastify"

import productsService from "@/services/products.service"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "../../dropdown-menu"

type Props = {
	children: React.ReactNode
	productId: string
}

export const DashboardProductDropdown = ({ children, productId }: Props) => {
	const pathname = usePathname()
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: () => productsService.deleteProduct(productId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] })
			toast.success("Successful delete!")
		},
		onError: err => toast.error(err.message)
	})

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem className='p-0'>
					<Link
						className='p-2'
						href={`${pathname}/${productId}/edit`}
					>
						Edit Product
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='p-0'>
					<button onClick={() => mutation.mutate()} className='p-2'>
						Delete Product
					</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
