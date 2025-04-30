"use client"

import { useEffect, useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

import { useFilters } from "@/hooks/useFilters"

export const GenderFilter = () => {
	const genders = ["Men", "Women"]
	const [choosedGender, setChoosedGender] = useState<string | null>(null)
	const { setParams } = useFilters()

	const handleGenderClick = (gender: string) => {
		if (choosedGender === gender) {
			setChoosedGender(null)
			setParams({ gender: "" })
		} else {
			setChoosedGender(gender)
			setParams({ gender: gender })
		}
	}

	useEffect(() => {
		if (choosedGender) {
			setParams({ gender: choosedGender })
		}
	}, [choosedGender])

	return (
		<AccordionItem value='gender'>
			<AccordionTrigger className='font-semibold uppercase'>
				GENDER
			</AccordionTrigger>
			<AccordionContent className='flex flex-col gap-2 '>
				{genders.map(gender => (
					<label
						key={gender}
						className='flex items-center gap-4 cursor-pointer'
					>
						<Checkbox
							checked={choosedGender === gender}
							onClick={() => handleGenderClick(gender)}
							className='rounded-sm  transition flex items-center justify-center text-dark-gray '
						/>
						{gender}
					</label>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
