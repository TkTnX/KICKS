import { UseFormReturn } from "react-hook-form"

import { CheckoutFormInput } from "./CheckoutFormInput"
import { ICheckout } from "@/types/checkout.interface"

type Props = {
	isPending: boolean
	form: UseFormReturn<ICheckout>
}

export const CheckoutShippingAddress = ({ isPending, form }: Props) => {
	return (
		<div className='mt-8 flex flex-col sm:grid sm:grid-cols-2 gap-5'>
			<CheckoutFormInput
				disabled={isPending}
				name='firstname'
				type='text'
				placeholder='First Name*'
				form={form}
			/>
			<CheckoutFormInput
				disabled={isPending}
				name='lastname'
				type='text'
				placeholder='Last Name*'
				form={form}
			/>
			<CheckoutFormInput
				disabled={isPending}
				name='address'
				type='text'
				placeholder='Find Delivery Address*'
				form={form}
				className='col-span-2'
			/>
			<CheckoutFormInput
				disabled={isPending}
				name='phone'
				type='tel'
				placeholder='Phone Number*'
				form={form}
			/>
		</div>
	)
}
