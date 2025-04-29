import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"

import { SIZES } from "./config"

export const SizeFilter = () => {
	return (
		<AccordionItem value='size'>
			<AccordionTrigger className='font-semibold uppercase'>
				SIZE
			</AccordionTrigger>
			<AccordionContent className='grid grid-cols-5 gap-4 '>
				{SIZES.map(size => (
					<button
						className='w-10 h-10 bg-white hover:opacity-50 transition flex items-center justify-center text-dark-gray rounded-md'
						key={size}
					>
						{size}
					</button>
				))}
			</AccordionContent>
		</AccordionItem>
	)
}
