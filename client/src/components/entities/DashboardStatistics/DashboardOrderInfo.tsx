import { LucideIcon } from "lucide-react"

type Props = {
	title: string
	Icon: LucideIcon
	value: {
		items: number
		amount: number
	}
}

export const DashboardOrderInfo = ({ title, Icon, value }: Props) => {
	return (
		<div className='bg-white py-6 px-4 rounded-2xl flex-1 '>
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
