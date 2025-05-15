import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import { useState } from "react"

type Props = {
    rating: number | null
    setRating: (n: number) => void
}

export const ChooseRating = ({setRating, rating}: Props) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div className='flex items-center gap-2'>
			{[...new Array(5)].map((_, index) => (
				<button
					type='button'
					onClick={() => setRating(index + 1)}
					className='group '
					key={index}
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<Star
						className={cn(
							"fill-[#afafb4] stroke-[#afafb4]",
							{
								"fill-yellow-300 stroke-yellow-300":
									index <= (hoveredIndex ?? -1)
							},
							{
								"fill-yellow-300 stroke-yellow-300":
									index + 1 <= (rating ?? -1)
							}
						)}
					/>
				</button>
			))}
		</div>
	)
}
