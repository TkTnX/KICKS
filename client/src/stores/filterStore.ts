import { create } from "zustand"

import { IFilters } from "@/types/filters.interface"

interface FilterState {
	selectedFilters: {
		sizes: string | string[]
		colors: string | string[]
		gender: string | null
		price: string | null
	}
	setSelectedFilters: (query: keyof IFilters, value: string) => void
}

export const useFilterStore = create<FilterState>((set, get) => ({
	selectedFilters: {
		sizes: [],
		colors: [],
		gender: null,
		price: null
	},
	setSelectedFilters: (query, value) => {
		const current = get().selectedFilters[query]

		if (Array.isArray(current)) {
			const alreadyExists = current.includes(value)
			const updated = alreadyExists
				? current.filter(v => v !== value)
				: [...current, value]
			set({
				selectedFilters: {
					...get().selectedFilters,
					[query]: updated
				}
			})
		} else {
			set({
				selectedFilters: {
					...get().selectedFilters,
					[query]: value
				}
			})
		}
		return get().selectedFilters
	}
}))
