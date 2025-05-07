"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";



import { Button } from "@/components/ui/button";



import { useAuth } from "@/hooks/useAuth";



import favoriteItemService from "@/services/favoriteItem.service";



import { cn } from "@/lib/utils";





type Props = {
	productId: string
	iconSize?: number
	className?: string
}

export const AddToFavorites = ({ productId, iconSize, className }: Props) => {
	const queryClient = useQueryClient()
	const { user, getMe, setUser } = useAuth()
	const mutation = useMutation({
		mutationFn: () => favoriteItemService.addToFavorites(productId),
		onError: err => toast.error(err.message),
		onSuccess: async () => {
			queryClient.invalidateQueries({ queryKey: ["cart", "favorites"] })
			const updatedUser = await getMe()
			setUser(updatedUser)
			toast.success("Added to favorites!")
		}
	})

	return (
		<Button
			onClick={() => mutation.mutate()}
			className={cn("bg-dark-gray p-4 group", className)}
		>
			<Heart
				size={iconSize ? iconSize : 16}
				className={cn("group-hover:fill-white ", {
					"fill-red-500 !stroke-red-500": user?.favoriteItems.find(
						p => p.productId === productId
					)
				})}
			/>
		</Button>
	)
}