"use client"

import { useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export const PriceFilter = () => {
	// TODO: TEMP
	const price = [100, 1000]
	const [minPrice, setMinPrice] = useState(price[0])

	return (
		<AccordionItem value='price'>
			<AccordionTrigger className='font-semibold uppercase'>
				PRICE
			</AccordionTrigger>
			<AccordionContent className='flex flex-col gap-2 '>
				<Input
					className='border-none shadow-none'
					onChange={e => setMinPrice(+e.target.value)}
					type='range'
					min={price[0]}
					max={price[1]}
				/>
				<div className='flex items-center justify-between'>
					<span className='text-sm opacity-80'>${price[0]}</span>
					<span className='text-sm opacity-80'>${price[1]}</span>
				</div>
			</AccordionContent>
		</AccordionItem>
	)
}
