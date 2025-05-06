"use client"

import { Menu } from "lucide-react"

import { useSidebarStore } from "@/stores/sidebarStore"

export const DashboardSidebarButton = () => {
	const { isOpen, setOpen } = useSidebarStore()
	return (
		<button
			onClick={() => setOpen(!isOpen)}
			className='mr-auto '
		>
			<Menu />
		</button>
	)
}
