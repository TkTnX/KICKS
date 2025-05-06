"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { DashboardSidebarCategories } from "./DashboardSidebarCategories"
import { DASHBOARD_CONFIG } from "./dashboard.config"
import { cn } from "@/lib/utils"

export const DashboardSidebar = () => {
	const pathname = usePathname()
	return (
		<div className='w-[260px] py-8  px-6 bg-white h-full min-h-screen flex flex-col items-center border-r border-r-[#cfcfcf] fixed left-0 top-0 bottom-0 z-10'>
			<Link href={"/"}>
				<Image
					width={128}
					height={32}
					alt='logo'
					src={"/images/logo.svg"}
				/>
			</Link>
			<div className='mt-12 flex flex-col gap-4 w-full'>
				{DASHBOARD_CONFIG.map(link => (
					<Link
						key={link.href}
						href={link.href}
						className={cn(
							"flex items-center p-4 gap-2 hover:bg-blue/50 transition rounded-xl",
							{
								"bg-blue   *:invert-100": pathname === link.href
							}
						)}
					>
						<Image
							className=''
							src={link.icon}
							alt={link.icon}
							width={16}
							height={16}
						/>
						<span className='text-sm uppercase font-sans font-medium'>
							{link.title}
						</span>
					</Link>
				))}
			</div>
			<DashboardSidebarCategories />
		</div>
	)
}
