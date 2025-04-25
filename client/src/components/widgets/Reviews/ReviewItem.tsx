import { Star } from "lucide-react"
import Image from "next/image"

import { IReview } from "@/types"

type Props = {
	review: IReview
}

export const ReviewItem = ({ review }: Props) => {
	return (
		<div className='rounded-4xl bg-white first:hidden sm:first:block last:hidden lg:last:block overflow-hidden w-full'>
			<div className='p-4 sm:p-8 '>
				<div className='flex items-center justify-between'>
					<div>
						<h6 className='font-semibold text-dark-gray text-xl sm:text-2xl'>
							{review.title}
						</h6>
						<p className='mt-2 font-normal text-dark-gray text-base opacity-80'>
							{review.text}
						</p>
					</div>
					<Image
						src={review.user.image ?? "/images/no-avatar.jpg"}
						alt='USER AVATAR'
						width={64}
						height={64}
						className='rounded-full w-12 sm:w-16 h-12 sm:h-16 object-cover'
					/>
				</div>
				<div className='flex items-center gap-2'>
					{[...new Array(review.rating)].map((_, index) => (
						<Star
							key={index}
							size={16}
							stroke='#ffa52f'
							fill='#ffa52f'
						/>
					))}
					<span className='font-semibold text-dark-gray'>
						{review.rating}
					</span>
				</div>
			</div>
			{review.image && (
				<div className='relative w-full h-[200px] sm:h-[325px]'>
					<Image
						src={review.image}
						alt={review.title}
						fill
						className='object-cover'
					/>
				</div>
			)}
		</div>
	)
}
