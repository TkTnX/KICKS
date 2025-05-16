"use client"

import { useQuery } from "@tanstack/react-query"

import { Block } from "@/components/entities/Block"
import { Skeleton } from "@/components/ui/skeleton"

import reviewsService from "@/services/reviews.service"

import { ReviewItem } from "../Reviews"

type Props = {
	productId: string
}

export const ProductReviews = ({ productId }: Props) => {
	const { data, isLoading } = useQuery({
		queryKey: ["reviews", productId],
		queryFn: () => reviewsService.getAllByProductId(productId)
	})

	if (!data?.length) return null

	return (
		<section className='mt-10'>
			<Block title='Reviews'>
				<div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-4 mt-8 items-start'>
					{isLoading
						? [...new Array(3)].map((_, index) => (
								<Skeleton
									key={index}
									className='w-full h-[300px] sm:h-[500px] bg-dark-gray/50 first:hidden sm:first:block last:hidden lg:last:block'
								/>
							))
						: data?.map(review => (
								<ReviewItem key={review.id} review={review} />
							))}
				</div>
			</Block>
		</section>
	)
}
