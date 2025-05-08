"use client"

import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { ReviewItem } from "@/components/widgets/Reviews"

import reviewsService from "@/services/reviews.service"

export const Reviews = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["reviews"],
		queryFn: () => reviewsService.getAll()
	})

	if (isLoading)
		return (
			<div className='w-full flex justify-center'>
				<Loader2 className='animate-spin' />
			</div>
		)

	if (error) return <ErrorMessage type='reviews' error={error.message} />
	if (data?.length === 0)
		return <div className='text-center text-2xl'>No Reviews yet!</div>
	return (
		<div className='grid vsm:grid-cols-2  gap-2'>
			{data?.map(review => (
				<ReviewItem key={review.id} review={review} isProfile={true} />
			))}
		</div>
	)
}
