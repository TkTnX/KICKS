import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

import { AddToCart } from "./AddToCart"

export const ProductControls = ({productId}: {productId: string}) => {
	return (
		<div className='mt-8 w-full'>
			<div className='flex items-center gap-2 '>
				<AddToCart productId={productId} />
				<Button className='bg-dark-gray p-4'>
					<Heart size={16} />
				</Button>
			</div>
			<Button className='bg-blue text-white py-4 uppercase mt-2 w-full hover:bg-blue/80 font-sans'>
				BUY IT NOW
			</Button>
		</div>
	)
}
