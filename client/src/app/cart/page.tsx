import { Metadata } from "next"

import { Bag } from "@/components/widgets/Bag"
import { OrderSummary } from "@/components/widgets/OrderSummary"
import { YouMayAlsoLike } from "@/components/widgets/YouMayAlsoLike"

export const metadata: Metadata = {
	title: "Корзина"
}

const CartPage = () => {
	return (
		<main className='container'>
			<section className="mt-6">
				<h2 className='text-3xl font-semibold'>Saving to celebrate</h2>
				<p className='mt-2 text-sm opacity-80 font-sans'>
					Enjoy up to 60% off thousands of styles during the End of
					Year sale - while suppiles last. No code needed.
				</p>
				<div className='flex flex-col md:flex-row items-start mt-8 justify-between gap-12 '>
					<Bag />
					<OrderSummary />
				</div>
			</section>
			<YouMayAlsoLike />
		</main>
	)
}

export default CartPage
