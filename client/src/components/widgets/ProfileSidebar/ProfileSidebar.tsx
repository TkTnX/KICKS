"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { LogoutButton } from "@/components/features/LogoutButton"

import { PROFILE_SIDEBAR } from "./profile.config"
import { cn } from "@/lib/utils"

export const ProfileSidebar = () => {
	const pathname = usePathname()
	// TODO: Доделать адаптив  на размере 480px
	return (
		<div
			className={
				" lg:w-[260px] px-2 py-2 rounded-xl   bg-[#fafafa] h-full flex flex-col items-center "
			}
		>
			<div className=' flex flex-row sm:flex-col gap-4 w-full'>
				{PROFILE_SIDEBAR.map(link => (
					<Link
						key={link.href}
						href={link.href}
						className={cn(
							"flex items-center p-1 sm:p-4 gap-2 hover:bg-blue/50 transition rounded-xl text-center justify-center",
							{
								"bg-blue   *:invert-100": pathname === link.href
							}
						)}
					>
						<span className='hidden sm:inline text-sm uppercase font-sans font-medium'>
							{link.name}
						</span>
						<span className='block sm:hidden'>{link.icon}</span>
					</Link>
				))}
				<LogoutButton />
			</div>
		</div>
	)
}
