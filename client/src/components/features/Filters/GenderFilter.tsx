"use client"

import { useState } from "react"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

import { useFilters } from "@/hooks/useFilters"

export const GenderFilter = () => {
	const genders = ["Men", "Women"]
	const [choosedGender, setChoosedGender] = useState<string[]>([])
	const { handleChangeFilters } = useFilters()

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
							checked={choosedGender.includes(gender)}
							onClick={() =>
								handleChangeFilters(
									choosedGender,
									setChoosedGender,
									gender,
									"gender"
								)
							}
							className='rounded-sm  transition flex items-center justify-center text-dark-gray '
						/>
						{gender}
					</label>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
