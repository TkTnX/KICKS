import { useQuery } from "@tanstack/react-query"

import { DashboardLastSales } from "@/components/entities/DashboardStatistics/DashboardLastSales"
import { DashboardSales } from "@/components/entities/DashboardStatistics/DashboardSales"

import statisticsService from "@/services/statistics.service"

export const MonthlyStatistics = () => {
	const { data } = useQuery({
		queryKey: ["sales"],
		queryFn: () => statisticsService.getMonthlyStatistics()
	})

	if (!data) return null

	return (
		<div className='mt-6 flex items-stretch gap-3.5'>
			<DashboardSales data={data} />
			<DashboardLastSales data={data} />
		</div>
	)
}
