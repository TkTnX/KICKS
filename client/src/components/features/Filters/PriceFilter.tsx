"use client"

import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

import { useCatalog } from "@/hooks/useCatalog"
import { useFilters } from "@/hooks/useFilters"

export const PriceFilter = () => {
	const [price, setPrice] = useState<string | null>(null)
	const [value] = useDebounce(price, 1000)
	const { prices } = useCatalog()
	const { setParams } = useFilters()
	const { clearFilters } = useFilters()

	// TODO: В будущем добавить эту функцию в useCatalog и использовать в других местах
	const handlePriceChange = (price: string) => {
		setPrice(price)
	}
	useEffect(() => {
		if (value) {
			setParams({ price: value })
		}
	}, [value])

	return (
		<>
			<AccordionItem value='price'>
				<AccordionTrigger className='font-semibold uppercase'>
					PRICE
				</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-2 '>
					<Input
						className='border-none shadow-none'
						onChange={e => handlePriceChange(e.target.value)}
						type='range'
						min={prices[0]}
						max={prices[1]}
						defaultValue={prices[0]}
					/>
					<div className='flex items-center justify-between'>
						<span className='text-sm opacity-80'>${prices[0]}</span>
						<span className='text-sm opacity-80'>${prices[1]}</span>
					</div>
				</AccordionContent>
			</AccordionItem>
			<button
				onClick={clearFilters}
				className='text-sm opacity-80  hover:opacity-50'
			>
				Reset
			</button>
		</>
	)
}
