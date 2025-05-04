import { create } from "zustand"

interface CartState {
	color: string | null
	size: string | null
	setValue: (type: "color" | "size", value: string) => void
}

export const useCartStore = create<CartState>((set, get) => ({
	color: null,
	size: null,
	setValue: (type, value) => {
		set(state => ({
			...state,
			[type]: value
		}))
	}
}))
