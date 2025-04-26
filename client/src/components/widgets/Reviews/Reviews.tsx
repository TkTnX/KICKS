"use client"

import { useQuery } from "@tanstack/react-query"

import { Block } from "@/components/entities/Block"
import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { Skeleton } from "@/components/ui/skeleton"

import reviewsService from "@/services/reviews.service"

import { ReviewItem } from "./ReviewItem"
import { IReview } from "@/types"

const reviews = [
	{
		id: 1,
		title: "Good Quality",
		text: "I highly recommend shopping from kicks",
		rating: 5,
		image: "/images/reviews/1.jpg",
		user: {
			image: "/images/avatar.jpg"
		}
	},
	{
		id: 2,
		title: "Good Quality",
		text: "I highly recommend shopping from kicks",
		rating: 5,
		image: "/images/reviews/2.jpg",

		user: {
			image: "/images/avatar.jpg"
		}
	},
	{
		id: 3,
		title: "Good Quality",
		text: "I highly recommend shopping from kicks",
		rating: 5,
		image: "/images/reviews/3.jpg",

		user: {
			image: "/images/avatar.jpg"
		}
	}
]

export const Reviews = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["reviews"],
		queryFn: () => reviewsService.getLastThree()
	})

	console.log(data)

	if (error) return <ErrorMessage error={error.message} type='reviews' />
	return (
		<section className='container mt-6 sm:mt-20'>
			<Block title='Reviews' link='/reviews' linkTitle='SEE ALL'>
				<div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-4 mt-8'>
					{isLoading
						? [...new Array(3)].map((_, index) => (
								<Skeleton
									key={index}
									className='w-full h-[300px] sm:h-[500px] bg-dark-gray/50 first:hidden sm:first:block last:hidden lg:last:block'
								/>
							))
						: data?.map(review => (
								// TODO: TEMP TYPE
								<ReviewItem
									key={review.id}
									review={review as unknown as IReview}
								/>
							))}
				</div>
			</Block>
		</section>
	)
}
