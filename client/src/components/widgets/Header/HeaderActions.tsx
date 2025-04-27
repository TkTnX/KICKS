"use client"

import { Search, ShoppingBasket, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

import { useAuth } from "@/hooks/useAuth"

import { IUser } from "@/types"

export const HeaderActions = () => {
	const [cookies] = useCookies()
	// TODO: TEMP SEARCHING USER
	const [user, setUser] = useState<IUser | null>(null)
	const { getRefreshToken } = useAuth()

	useEffect(() => {
		async function getToken() {
			const refreshToken = await getRefreshToken()

			setUser(refreshToken)
		}
		getToken()
	}, [cookies.refreshToken])

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
