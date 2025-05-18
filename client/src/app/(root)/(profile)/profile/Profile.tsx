"use client"

import Image from "next/image"
import Link from "next/link"

import { ProfileInformation } from "@/components/entities/ProfileInformation/ProfileInformation"

import { useUserStore } from "@/stores/userStore"

export const Profile = () => {
	const { user } = useUserStore()
	return (
		<>
			<section>
				<div className='flex items-end justify-center w-full'>
					<div>
						<Image
							width={100}
							height={100}
							className='object-cover rounded-full'
							alt={user?.name || "avatar"}
							src={
								(user &&
									user.image &&
									`${process.env.NEXT_PUBLIC_BACKEND_URL}${user?.image}`) ||
								"/images/no-avatar.jpg"
							}
						/>
						<h3 className='mt-2'>{user?.name}</h3>
						<Link
							href={"/profile/edit"}
							className='text-sm text-blue mt-1'
						>
							Edit profile
						</Link>
					</div>
					<div>
						<p>
							Joined:{" "}
							{new Date(user?.createdAt!).toLocaleDateString(
								"ru-RU"
							)}
						</p>
					</div>
				</div>
			</section>
			<section className='mt-4'>
				<h3 className='text-2xl'>More Information</h3>
				<ProfileInformation />
			</section>
		</>
	)
}
