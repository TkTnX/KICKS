"use client"

import { Search, ShoppingBasket, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

import { useAuth } from "@/hooks/useAuth"

export const HeaderActions = () => {
	const { getMe, user, setUser } = useAuth()

	useEffect(() => {
		async function checkAuth() {
			const user = await getMe()
			setUser(user)
		}
		checkAuth()
	}, [])

	return (
		<div className='flex items-center gap-4  lg:gap-10'>
			{/* TODO: Сделать открытие поиска */}
			<button className='hover:opacity-80 transition'>
				<Search className='size-5 sm:size-6' size={24} />
			</button>

			{user ? (
				<Link href='/profile' className='hover:opacity-80 transition'>
					{user.image ? (
						<Image
							src={user.image}
							width={24}
							height={24}
							alt={user.name || user.email}
						/>
					) : (
						<User className='size-5 sm:size-6' size={24} />
					)}
				</Link>
			) : (
				<Link href={"/login"} className='hover:opacity-80 transition'>
					<User className='size-5 sm:size-6' size={24} />
				</Link>
			)}

			{/* TODO: Сделать открытие корзины */}
			<button className='hover:opacity-80 transition'>
				<ShoppingBasket className='size-5 sm:size-6' size={24} />
			</button>
		</div>
	)
}
