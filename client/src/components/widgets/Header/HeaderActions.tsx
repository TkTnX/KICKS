import { Search, ShoppingBasket, User, User2Icon } from "lucide-react"
import Link from "next/link"

export const HeaderActions = () => {
	const user = false
	return (
		<div className='flex items-center gap-4  lg:gap-10'>
			{/* TODO: Сделать открытие поиска */}
			<button className='hover:opacity-80 transition'>
				<Search className='size-5 sm:size-6' size={24} />
			</button>

			<Link href={"/login"} className='hover:opacity-80 transition'>
				<User className='size-5 sm:size-6' size={24} />
			</Link>

			{/* TODO: Сделать открытие корзины */}
			<button className='hover:opacity-80 transition'>
				<ShoppingBasket className='size-5 sm:size-6' size={24} />
			</button>
		</div>
	)
}
