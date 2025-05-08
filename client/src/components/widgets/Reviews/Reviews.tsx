"use client"

import { useQuery } from "@tanstack/react-query"

import { Block } from "@/components/entities/Block"
import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { Skeleton } from "@/components/ui/skeleton"

import reviewsService from "@/services/reviews.service"

import { ReviewItem } from "./ReviewItem"

export const Reviews = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["reviews"],
		queryFn: () => reviewsService.getLastThree()
	})

	if (error) return <ErrorMessage error={error.message} type='reviews' />
	return (
		<section className='container mt-6 sm:mt-20'>
			<Block title='Reviews' link='/reviews' linkTitle='SEE ALL'>
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
