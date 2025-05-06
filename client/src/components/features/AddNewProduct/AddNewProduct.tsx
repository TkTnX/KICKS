import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export const AddNewProduct = () => {
	return (
		<Button className='flex items-center gap-2 text-white font-sans text-sm uppercase font-medium py-4 px-6 '>
			<PlusCircle color='#fff' />
			ADD NEW PRODUCT
		</Button>
	)
}
