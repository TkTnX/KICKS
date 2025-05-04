import { Heart } from "lucide-react"

import { RemoveFromCart } from "./RemoveFromCart"

export const BagItemControls = ({ id }: { id: string }) => {
	return (
		<div className='flex items-center gap-6 mt-auto'>
			<button className='hover:opacity-50 transition'>
				<Heart size={32} strokeWidth={1} />
			</button>
			<RemoveFromCart id={id} />
		</div>
	)
}
