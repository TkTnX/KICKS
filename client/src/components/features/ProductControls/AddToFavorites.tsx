"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Heart } from "lucide-react"
import { toast } from "react-toastify"

import { Button } from "@/components/ui/button"

import { useAuth } from "@/hooks/useAuth"

import favoriteItemService from "@/services/favoriteItem.service"

import { cn } from "@/lib/utils"

export const AddToFavorites = ({ productId }: { productId: string }) => {
	const queryClient = useQueryClient()
	const { user, getMe, setUser } = useAuth()

	const mutation = useMutation({
		mutationFn: () => favoriteItemService.addToFavorites(productId),
		onError: err => toast.error(err.message),
		onSuccess: async () => {
			queryClient.invalidateQueries({ queryKey: ["cart"] })
			const updatedUser = await getMe()
			setUser(updatedUser)
			toast.success("Added to favorites!")
		}
	})

	return (
		<Button
			onClick={() => mutation.mutate()}
			className='bg-dark-gray p-4 group'
		>
			<Heart
				size={16}
				className={cn("group-hover:fill-white ", {
					"fill-white": user?.favoriteItems.find(
						p => p.productId === productId
					)
				})}
			/>
		</Button>
	)
}
