import { useRouter, useSearchParams } from "next/navigation"

export function useFilters() {
	const searchParams = useSearchParams()
	const params = Object.fromEntries(searchParams.entries())
	const router = useRouter()

	const setParams = (param: Record<string, string>) => {
		const newParams = { ...params, ...param }
		router.replace(`?${new URLSearchParams(newParams).toString()}`)
	}

	// ОЧИСТКА ФИЛЬТРОВ
	const clearFilters = () => {
		const clearedParams = new URLSearchParams({})
		router.replace(`?${clearedParams.toString()}`)
	}

	return {
		setParams,
		clearFilters
	}
}
