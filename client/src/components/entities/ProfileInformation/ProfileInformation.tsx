import { Box, Heart, Text, Wallet2 } from "lucide-react"

import { useUserStore } from "@/stores/userStore"

export const ProfileInformation = () => {
	const { user } = useUserStore()
	return (
		<div className='grid vsm:grid-cols-2 lg:grid-cols-4 items-center gap-4 mt-2'>
			<div className='flex flex-col gap-2 items-center p-6 border-[#b9b9b9] border rounded-lg text-center'>
				<Box size={36} />
				<p>
					Total Orders: <b>{user?.orders.length}</b>
				</p>
			</div>
			<div className='flex flex-col gap-2 items-center p-6 border-[#b9b9b9] border rounded-lg text-center'>
				<Wallet2 size={36} />
				<p>
					Total Price:{" "}
					<b>
						{user?.orders.reduce(
							(acc, order) => acc + order.totalPrice,
							0
						)}
					</b>
				</p>
			</div>
			<div className='flex flex-col gap-2 items-center p-6 border-[#b9b9b9] border rounded-lg text-center'>
				<Heart size={36} />
				<p>
					Total Favorites: <b>{user?.favoriteItems.length}</b>
				</p>
			</div>
			<div className='flex flex-col gap-2 items-center p-6 border-[#b9b9b9] border rounded-lg text-center'>
				<Text size={36} />
				<p>
					Total Reviews: <b>{user?.reviews.length}</b>
				</p>
			</div>
		</div>
	)
}
