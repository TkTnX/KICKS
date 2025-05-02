import { useRouter, useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

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
		setParams({})
		const clearedParams = new URLSearchParams({})
		router.replace(`?${clearedParams.toString()}`)
	}
	// ФУНКЦИЯ ИЗМЕНЕНИЯ ФИЛЬТРАЦИИ
	const handleChangeFilters = (
		choosedValues: string[],
		setChoosedValues: Dispatch<SetStateAction<string[]>>,
		value: string,
		queryKey: string
	) => {
		let newValues: string[] = [...choosedValues]
		if (choosedValues.includes(value)) {
			newValues = newValues.filter(s => s !== value)
		} else {
			newValues.push(value)
		}

		setChoosedValues(newValues)

		if (newValues.length > 0) {
			setParams({ [queryKey]: newValues.join(",") })
		} else {
			const params = Object.fromEntries(searchParams.entries())
			delete params[queryKey]
			setParams(params)
			router.push(`/catalog?${new URLSearchParams(params).toString()}`)
		}
	}

	return {
		setParams,
		clearFilters,
		handleChangeFilters
	}
}
