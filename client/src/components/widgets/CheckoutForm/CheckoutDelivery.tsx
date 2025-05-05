import { cn } from "@/lib/utils";
import { EDeliveryType } from "@/types/checkout.interface";





type Props = {
	setDeliveryType: (type: EDeliveryType) => void
	deliveryType: EDeliveryType
}

export const CheckoutDelivery = ({ setDeliveryType, deliveryType }: Props) => {
	return (
		<div className='flex flex-col mt-8 gap-6'>
			<button
				type='button'
				onClick={() => setDeliveryType(EDeliveryType.STANDARD)}
				className={cn(
					"p-4 flex items-center justify-between rounded-2xl border border-dark-gray",
					{
						"bg-white border-transparent":
							deliveryType === "standard"
					}
				)}
			>
				<h6 className='text-xl sm:text-2xl'>Standard Delivery</h6>
				<p className='text-base sm:text-xl text-blue'>$6.00</p>
			</button>
			<button
				onClick={() => setDeliveryType(EDeliveryType.STORE)}
				type='button'
				className={cn("p-4 rounded-2xl border border-dark-gray", {
					"bg-white border-transparent": deliveryType === "store"
				})}
			>
				<div className='flex items-center justify-between'>
					<h6 className='text-xl sm:text-2xl'>Collect in store</h6>
					<p className='text-base sm:text-xl '>Free</p>
				</div>
				<p className='opacity-80 text-left text-xs sm:text-sm font-sans'>
					Pay now, collect in store
				</p>
			</button>
		</div>
	)
}