"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

import { FormCheckbox } from "@/components/ui/FormCheckbox"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { CheckotFormInput } from "./CheckotFormInput"
import { cn } from "@/lib/utils"

export const CheckoutForm = () => {
	const [deliveryType, setDeliveryType] = useState<"standard" | "store">(
		"standard"
	)
	const form = useForm()
	const isPending = false
	// TODO: Разнести по разным компонентам
	return (
		<Form {...form}>
			<form>
				<div>
					<h3 className='text-xl sm:text-3xl'>Contact Details</h3>
					<p className='opacity-80 mt-2'>
						We will use these details to keep you inform about your
						delivery.
					</p>
					<CheckotFormInput
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

					<div className='mt-8 grid grid-cols-2 gap-5'>
						<CheckotFormInput
							disabled={isPending}
							name='firsname'
							type='text'
							placeholder='First Name*'
							form={form}
						/>
						<CheckotFormInput
							disabled={isPending}
							name='lastname'
							type='text'
							placeholder='Last Name*'
							form={form}
						/>
						<CheckotFormInput
							disabled={isPending}
							name='address'
							type='text'
							placeholder='Find Delivery Address*'
							form={form}
							className='col-span-2'
						/>
						<CheckotFormInput
							disabled={isPending}
							name='phone'
							type='tel'
							placeholder='Phone Number*'
							form={form}
						/>
					</div>
				</div>
				<div className='mt-4 lg:mt-8'>
					<h3 className='text-xl sm:text-3xl'>Delivery Options</h3>

					<div className='flex flex-col mt-8 gap-6'>
						<button
							type='button'
							onClick={() => setDeliveryType("standard")}
							className={cn(
								"p-4 flex items-center justify-between rounded-2xl border border-dark-gray",
								{
									"bg-white border-transparent":
										deliveryType === "standard"
								}
							)}
						>
							<h6 className='text-xl sm:text-2xl'>
								Standard Delivery
							</h6>
							<p className='text-base sm:text-xl text-blue'>
								$6.00
							</p>
						</button>
						<button
							onClick={() => setDeliveryType("store")}
							type='button'
							className={cn(
								"p-4 rounded-2xl border border-dark-gray",
								{
									"bg-white border-transparent":
										deliveryType === "store"
								}
							)}
						>
							<div className='flex items-center justify-between'>
								<h6 className='text-xl sm:text-2xl'>
									Collect in store
								</h6>
								<p className='text-base sm:text-xl '>Free</p>
							</div>
							<p className='opacity-80 text-left text-xs sm:text-sm font-sans'>
								Pay now, collect in store
							</p>
						</button>
					</div>
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
				<Button className='mt-11 font-bold text-sm w-full sm:w-[362px] '>
					REVIEW AND PAY
				</Button>
			</form>
		</Form>
	)
}
