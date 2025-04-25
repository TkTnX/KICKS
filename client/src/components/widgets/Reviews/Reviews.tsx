import { Block } from "@/components/entities/Block"

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
	return (
		<section className='container mt-6 sm:mt-20'>
			<Block title='Reviews' link='/reviews' linkTitle='SEE ALL'>
				<div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-4 mt-8'>
					{reviews.map(review => (
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
