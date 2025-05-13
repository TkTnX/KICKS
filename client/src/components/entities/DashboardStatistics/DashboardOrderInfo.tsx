import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type Props = {
	title: string
	Icon: LucideIcon
	value: {
		items: number
		amount: number
	}
	className?: string
}

export const DashboardOrderInfo = ({
	title,
	Icon,
	value,
	className
}: Props) => {
	return (
		<div
			className={cn("bg-white py-6 px-4 rounded-2xl flex-1 ", className)}
		>
			<div className='flex items-center gap-2'>
				<div className='bg-blue p-1 rounded-xl '>
					<Icon color='#fff' />
				</div>
				<div>
					<h6 className='text-sm'> {title}</h6>
					<span className='font-sans'>{value.items} orders</span>
				</div>
			</div>
			<div className=' mt-2'>${value.amount.toFixed(2)}</div>
		</div>
	)
}
