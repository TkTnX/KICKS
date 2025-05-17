import { useRouter, useSearchParams } from "next/navigation"

import { useFilterStore } from "@/stores/filterStore"

export function useFilters() {
	const { selectedFilters } = useFilterStore()
	const searchParams = useSearchParams()
	const params = Object.fromEntries(searchParams.entries())
	const router = useRouter()

	const onSubmit = () => {
		// TODO: Доделать фильтрацию
		

	}

	// ОЧИСТКА ФИЛЬТРОВ
	const clearFilters = () => {
		const clearedParams = new URLSearchParams({})
		router.replace(`?${clearedParams.toString()}`)
	}

	return {
		clearFilters,
		onSubmit
	}
}
