import { useRouter } from "next/navigation"

import { useFilterStore } from "@/stores/filterStore"

export function useFilters() {
	const { selectedFilters, setInitialFilters } = useFilterStore()

	const router = useRouter()

	const onSubmit = () => {
		const newParams = new URLSearchParams()
		Object.entries(selectedFilters).forEach(([key, value]) => {
			if (Array.isArray(value) && value.length > 0) {
				newParams.set(key, value.join(","))
			} else if (typeof value === "string") {
				newParams.set(key, value)
			}
		})

		router.push(`?${newParams.toString()}`)
	}

	// ОЧИСТКА ФИЛЬТРОВ
	const clearFilters = () => {
		const clearedParams = new URLSearchParams({})
		setInitialFilters()
		router.replace(`?${clearedParams.toString()}`)
	}

	return {
		clearFilters,
		onSubmit
	}
}
