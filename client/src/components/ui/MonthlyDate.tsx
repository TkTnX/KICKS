import { Calendar } from "lucide-react"

export const MonthlyDate = () => {
	const today = new Date()
	const monthAgo = new Date(new Date().setDate(today.getDate() - 30))
	return (
		<div className='flex items-center gap-2'>
			<Calendar />
			<p className='text-xs sm:text-base'>
				{monthAgo.toDateString()} - {today.toDateString()}
			</p>
		</div>
	)
}
