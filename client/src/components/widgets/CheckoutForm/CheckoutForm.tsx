"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { FormCheckbox } from "@/components/ui/FormCheckbox"
import { Link } from "@/components/ui/Link"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { useCart } from "@/hooks/useCart"

import { CheckoutDelivery } from "./CheckoutDelivery"
import { CheckoutFormInput } from "./CheckoutFormInput"
import { CheckoutShippingAddress } from "./CheckoutShippingAddress"
import { EDeliveryType, ICheckout } from "@/types/checkout.interface"

export const CheckoutForm = () => {
	const { cart } = useCart()
	const [deliveryType, setDeliveryType] = useState<EDeliveryType>(
		EDeliveryType.STANDARD
	)
	const form = useForm<ICheckout>()
	const isPending = false

	// TODO: Начать создание оплаты
	const onSubmit = async (data: ICheckout) => {
		try {
			const body: ICheckout = {
				address: data.address,
				email: data.email,
				firstname: data.firstname,
				lastname: data.lastname,
				phone: data.phone,
				deliveryType
			}
			console.log(body)
		} catch (error) {
			console.log(error)
			toast.error("Something went wrong!")
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex-1'>
				<div>
					<h3 className='text-xl sm:text-3xl'>Contact Details</h3>
					<p className='opacity-80 mt-2'>
						We will use these details to keep you inform about your
						delivery.
					</p>
					<CheckoutFormInput
						disabled={isPending}
						name='email'
						type='email'
						placeholder='Email*'
						form={form}
						className='mt-8'
					/>
				</div>
				<div className='mt-4 lg:mt-8'>
					<h3 className='text-xl sm:text-3xl'>Shipping Address</h3>

					<CheckoutShippingAddress
						form={form}
						isPending={isPending}
					/>
				</div>
				<div className='mt-4 lg:mt-8'>
					<h3 className='text-xl sm:text-3xl'>Delivery Options</h3>

					<CheckoutDelivery
						deliveryType={deliveryType}
						setDeliveryType={setDeliveryType}
					/>
				</div>

				<div className='flex flex-col gap-6 mt-4 lg:mt-8'>
					<FormCheckbox name='billing-info-is-the-same'>
						My billing and delivery information are the same My
						billing and delivery information are the same
					</FormCheckbox>
					<FormCheckbox name='age-check'>
						I'm 13+ year old
					</FormCheckbox>
				</div>
				{cart?.cartItems.length ? (
					<Button
						type='submit'
						className='mt-11 font-bold text-sm w-full sm:w-[362px] '
					>
						REVIEW AND PAY
					</Button>
				) : (
					<Link className="mt-11" href='/catalog'>GO TO SHOPPING</Link>
				)}
			</form>
		</Form>
	)
}
