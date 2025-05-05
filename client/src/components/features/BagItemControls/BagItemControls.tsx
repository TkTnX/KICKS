import { AddToFavorites } from "../ProductControls/AddToFavorites"

import { RemoveFromCart } from "./RemoveFromCart"

type Props = { productId: string; id: string }

export const BagItemControls = ({ productId, id }: Props) => {
	return (
		<div className='flex items-center gap-6 mt-auto'>
			<AddToFavorites
				className='bg-transparent  *:stroke-dark-gray  shadow-none !p-0 hover:bg-transparent hover:*:fill-dark-gray *:!w-[32px] *:!h-[32px] *:stroke-1'
				iconSize={32}
				productId={productId}
			/>
			<RemoveFromCart id={id} />
		</div>
	)
}
