import { Metadata } from "next"

import { Bag } from "@/components/widgets/Bag"
import { CheckoutForm } from "@/components/widgets/CheckoutForm"
import { OrderSummary } from "@/components/widgets/OrderSummary"

export const metadata: Metadata = {
	title: "Checkout"
}

const CheckoutPage = () => {
	return (
		<main className='container mt-8'>
			<section className='flex flex-col-reverse gap-6 lg:flex-row items-start justify-between'>
				<CheckoutForm />
				<div>
					<OrderSummary />
					<Bag />
				</div>
			</section>
		</main>
	)
}

export default CheckoutPage
