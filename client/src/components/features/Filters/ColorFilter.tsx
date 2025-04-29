import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { COLORS } from "./config"

export const ColorFilter = () => {
	return (
		<AccordionItem value='color'>
			<AccordionTrigger className='font-semibold uppercase'>
				COLOR
			</AccordionTrigger>
			<AccordionContent className='grid grid-cols-5 gap-4 '>
				{COLORS.map(color => (
					<button
						className={`w-10 h-10 bg-[${color}] hover:opacity-50 transition   rounded-md`}
						style={{ backgroundColor: color }}
						key={color}
					/>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
