"use client"

import { ShoppingBasket, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useEffect } from "react"

import { SearchForm } from "@/components/features/Search"

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
			{user && user.role === "ADMIN" ? (
				<Link
					href={"/dashboard"}
					className='text-xs border p-2 rounded hover:bg-dark-gray hover:text-white transition'
				>
					Go to Dashboard
				</Link>
			) : (
				<Suspense>
					<SearchForm />
				</Suspense>
			)}

			{user ? (
				<Link href='/profile' className='hover:opacity-80 transition'>
					{user.image ? (
						<Image
							src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${user.image}`}
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

			<Link href={"/cart"} className='block hover:opacity-80 transition'>
				<ShoppingBasket className='size-5 sm:size-6' size={24} />
			</Link>
		</div>
	)
}
