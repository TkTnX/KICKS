import { create } from "zustand"

interface SidebarStore {
	isOpen: boolean
	setOpen: (bool: boolean) => void
}

export const useSidebarStore = create<SidebarStore>(set => ({
	isOpen: false,
	setOpen: bool => {
		set(() => ({ isOpen: bool }))
	}
}))
