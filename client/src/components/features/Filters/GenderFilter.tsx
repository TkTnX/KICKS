"use client"

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

export const GenderFilter = () => {
	const genders = ["Men", "Women"]

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
						<Checkbox className='rounded-sm  transition flex items-center justify-center text-dark-gray ' />
						{gender}
					</label>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
