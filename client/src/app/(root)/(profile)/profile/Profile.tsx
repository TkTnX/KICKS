"use client"

import Image from "next/image"

import { ProfileInformation } from "@/components/entities/ProfileInformation/ProfileInformation"

import { useUserStore } from "@/stores/userStore"

export const Profile = () => {
	const { user } = useUserStore()
	console.log(user)
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
							src={user?.image || "/images/no-avatar.jpg"}
						/>
						<h3 className='mt-2'>{user?.name}</h3>
						<button className='text-sm text-blue mt-1'>
							Edit profile
						</button>
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
