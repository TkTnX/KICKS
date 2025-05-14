"use client"

import { ChevronRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

import { DashboardSidebarCategories } from "./DashboardSidebarCategories"
import { DASHBOARD_CONFIG } from "./dashboard.config"
import { cn } from "@/lib/utils"
import { useSidebarStore } from "@/stores/sidebarStore"

export const DashboardSidebar = () => {
	const pathname = usePathname()
	const { isOpen, setOpen } = useSidebarStore()
	const sidebarRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!(sidebarRef.current as HTMLElement).contains(
					event.target as Node
				)
			) {
				setOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [setOpen])

	return (
		<div
			ref={sidebarRef}
			className={cn(
				"transition -translate-x-full lg:-translate-x-0 w-full vsm:w-auto lg:w-[260px] py-8  px-2 lg:px-6 bg-white h-full min-h-screen flex flex-col items-center border-r border-r-[#cfcfcf] fixed left-0 top-0 bottom-0 z-20",
				{ "-translate-0": isOpen }
			)}
		>
			<button
				onClick={() => setOpen(false)}
				className='absolute left-2 block vsm:hidden'
			>
				<X />
			</button>
			<Link onClick={() => setOpen(false)} href={"/"}>
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
						onClick={() => setOpen(false)}
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
			<Link
				href='/dashboard/colors'
				className='flex items-center justify-between w-full mt-3 hover:opacity-80 transition'
			>
				Colors
			</Link>
		</div>
	)
}
