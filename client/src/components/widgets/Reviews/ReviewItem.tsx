import { Star } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { IReview } from "@/types"

type Props = {
	review: IReview
	isProfile?: boolean
}

export const ReviewItem = ({ review, isProfile = false }: Props) => {
	return (
		<div
			className={cn("rounded-4xl bg-white  overflow-hidden w-full", {
				"first:hidden sm:first:block last:hidden lg:last:block":
					!isProfile
			})}
		>
			<div className={cn("p-4 sm:p-8 ", { "p-2 sm:p-2": isProfile })}>
				<div
					className={cn("flex items-center justify-between", {
						"flex-col-reverse items-start": isProfile
					})}
				>
					<div>
						<h6
							className={cn(
								"font-semibold text-dark-gray text-xl sm:text-2xl",
								{ "text-base sm:text-base": isProfile }
							)}
						>
							{review.title}
						</h6>
						<p
							className={cn(
								"mt-2 font-normal text-dark-gray text-base opacity-80",
								{ "text-sm": isProfile }
							)}
						>
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
				<div
					className={cn("relative w-full h-[200px] sm:h-[325px]", {
						"h-[150px] sm:h-[150px]": isProfile
					})}
				>
					<Image
						src={
							review.image &&
							`${process.env.NEXT_PUBLIC_BACKEND_URL}${review.image}`
						}
						alt={review.title}
						fill
						className='object-cover'
					/>
				</div>
			)}
		</div>
	)
}
