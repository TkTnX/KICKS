import { create } from "zustand"

import { IUser } from "@/types"

interface UserState {
	user: null | IUser
	setUser: (user: IUser) => void
}

export const useUserStore = create<UserState>(set => ({
	user: null,
	setUser: user => {
		set(() => ({ user }))
	}
}))
