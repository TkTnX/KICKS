import { Link } from "@/components/ui/Link"

export const OrderSummary = () => {
	return (
		<div className=' lg:flex-1 rounded-2xl md:rounded-none p-6 md:p-0 bg-white w-full md:w-auto md:bg-transparent md:max-w-[420px]'>
			<h4 className='text-3xl'>Order Summary</h4>
			<ul className='flex flex-col gap-4 mt-6'>
				<li className='flex justify-between text-base lg:text-xl font-sans'>
					<span>2 ITEMS</span>{" "}
					<span className='opacity-80'>$130.00</span>
				</li>
				<li className='flex justify-between text-base lg:text-xl font-sans'>
					<span>Delivery</span> <span className='opacity-80'>$0</span>
				</li>
				<li className='text-lg lg:text-2xl flex justify-between '>
					<span className='font-bold'>Total</span>{" "}
					<span className='opacity-80'>$130.00</span>
				</li>
			</ul>
			<Link
				href={"/checkout"}
				className='mt-6 bg-dark-gray w-full text-center'
			>
				CHECKOUT
			</Link>
		</div>
	)
}
