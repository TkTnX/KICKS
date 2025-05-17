"use client"

import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useCatalog } from "@/hooks/useCatalog"
import { useFilters } from "@/hooks/useFilters"

import { useFilterStore } from "@/stores/filterStore"

export const PriceFilter = () => {
	const [price, setPrice] = useState<string | null>(null)
	const { prices } = useCatalog()
	const { clearFilters, onSubmit } = useFilters()
	const { setSelectedFilters } = useFilterStore()

	const handlePriceChange = (price: string) => {
		setPrice(price)
	}

	useEffect(() => {
		if (price) setSelectedFilters("price", price)
	}, [price])

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
			<div className='flex items-center gap-4'>
				<Button
					onClick={onSubmit}
					className='bg-blue hover:bg-blue/60 font-sans'
				>
					Submit
				</Button>
				<button
					onClick={clearFilters}
					className='text-sm opacity-80  hover:opacity-50'
				>
					Reset
				</button>
			</div>
		</>
	)
}
