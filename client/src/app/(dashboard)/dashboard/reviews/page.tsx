import { Metadata } from "next"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ReviewItem } from "@/components/widgets/Reviews"

import reviewsService from "@/services/reviews.service"

export const metadata: Metadata = {
	title: "Reviews"
}

const breadcrumbsList = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "Dashboard",
		link: "/dashboard"
	},
	{
		name: "Reviews"
	}
]

const DashboardReviewsPage = async () => {
	const reviews = await reviewsService.getAll()

	return (
		<section>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<h4 className='text-2xl font-sans font-semibold'>Reviews</h4>
					<Breadcrumbs items={breadcrumbsList} />
				</div>
			</div>
			<div className='mt-4 grid grid-cols-3  gap-4'>
				{reviews.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</div>
		</section>
	)
}

export default DashboardReviewsPage
