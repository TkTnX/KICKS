"use client"

import { Loader2 } from "lucide-react"
import { usePathname } from "next/navigation"

import { ErrorMessage } from "@/components/entities/ErrorMessage"
import { Link } from "@/components/ui/Link"

import { useCart } from "@/hooks/useCart"

import { cn } from "@/lib/utils"

export const OrderSummary = ({ className }: { className?: string }) => {
	const { cart, isLoading, error } = useCart()
	const pathname = usePathname()
	if (error) return <ErrorMessage error={error.message} type='cart' />
	return (
		<div
			className={cn(
				"lg:flex-1 rounded-2xl md:rounded-none p-6 md:p-0 bg-white w-full md:w-auto md:bg-transparent md:max-w-[420px]",
				className
			)}
		>
			<h4 className='text-3xl'>Order Summary</h4>
			{isLoading ? (
				<div className='w-full flex items-center justify-center py-10'>
					<Loader2 className='animate-spin ' />
				</div>
			) : (
				<ul className='flex flex-col gap-4 mt-6'>
					<li className='flex justify-between text-base lg:text-xl font-sans'>
						<span>{cart?.cartItems.length} ITEMS</span>{" "}
						<span className='opacity-80'>
							${cart?.totalPrice}.00
						</span>
					</li>
					<li className='flex justify-between text-base lg:text-xl font-sans'>
						<span>Delivery</span>{" "}
						<span className='opacity-80'>$0</span>
					</li>
					<li className='text-lg lg:text-2xl flex justify-between '>
						<span className='font-bold'>Total</span>{" "}
						<span className='opacity-80'>
							${cart?.totalPrice}.00
						</span>
					</li>
				</ul>
			)}

			{!pathname.includes("checkout") && (
				<Link
					href={"/checkout"}
					className={cn("mt-6 bg-dark-gray w-full text-center", {
						"opacity-50 pointer-events-none":
							!cart?.cartItems.length
					})}
				>
					CHECKOUT
				</Link>
			)}
		</div>
	)
}
