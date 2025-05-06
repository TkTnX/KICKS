import { Bell, ChevronDown, Menu, Search } from "lucide-react"
import { DashboardSidebarButton } from "./DashboardSidebarButton"

export const DashboardHeader = () => {
	return (
		<header className='py-7 px-2 sm:px-8 bg-white border-b border-b-[#cfcfcf] flex items-center justify-end gap-2 sm:gap-10 fixed top-0 left-0 right-0 z-10'>
			<DashboardSidebarButton />
			<button className='hover:opacity-80 transition'>
				<Search size={28} />
			</button>
			<button className='hover:opacity-80 transition'>
				<Bell fill='#232321' />
			</button>
			{/* TODO: Сделать dropdown, в котором можно будет выйти из аккаунта  */}
			<button className='flex items-center justify-between gap-1 border border-dark-gray rounded-lg py-2 px-4 hover:opacity-80 transition'>
				<span className='text-sm font-sans uppercase font-medium'>
					ADMIN
				</span>
				<ChevronDown size={16} />
			</button>
		</header>
	)
}
