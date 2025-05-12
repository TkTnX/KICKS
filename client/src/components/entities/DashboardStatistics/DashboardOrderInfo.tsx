import { LucideIcon } from "lucide-react"

type Props = {
	title: string
	Icon: LucideIcon
	value: number
}

export const DashboardOrderInfo = ({ title, Icon, value }: Props) => {
	return (
		// TODO: Получать тут ещё и цену
		<div className='bg-white py-6 px-4 rounded-2xl flex-1 '>
			<div className='flex items-center gap-2'>
				<div className='bg-blue p-1 rounded-xl '>
					<Icon color='#fff' />
				</div>
				<h6 className='text-sm'> {title}</h6>
			</div>
			<div className=' mt-2'>
				<span className='font-sans'>{value} orders</span>
			</div>
		</div>
	)
}
