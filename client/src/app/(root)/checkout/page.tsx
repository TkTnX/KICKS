import { Metadata } from "next"

import { CheckoutDetails } from "@/components/widgets/CheckoutDetails"
import { CheckoutForm } from "@/components/widgets/CheckoutForm"

export const metadata: Metadata = {
	title: "Checkout"
}

const CheckoutPage = () => {
	return (
		<main className='container mt-8'>
			<section className='flex flex-col-reverse md:flex-row  gap-6  items-start justify-between'>
				<CheckoutForm />
				<CheckoutDetails />
			</section>
		</main>
	)
}

export default CheckoutPage
