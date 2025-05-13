import { useQuery } from "@tanstack/react-query"

import { DashboardLastSales } from "@/components/entities/DashboardStatistics/DashboardLastSales"
import { DashboardSales } from "@/components/entities/DashboardStatistics/DashboardSales"
import { Skeleton } from "@/components/ui/skeleton"

import statisticsService from "@/services/statistics.service"

export const MonthlyStatistics = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["sales"],
		queryFn: () => statisticsService.getMonthlyStatistics()
	})

	return (
		<div className='mt-6 grid lg:flex items-stretch gap-3.5 flex-col lg:flex-row '>
			{isLoading ? (
				<>
					<Skeleton className=' w-full flex-2/3 bg-dark-gray/30 h-[420px]' />
					<Skeleton className=' w-full flex-1/3 bg-dark-gray/30 h-[420px]' />
				</>
			) : (
				<>
					<DashboardSales data={data!} />
					<DashboardLastSales data={data!} />
				</>
			)}
		</div>
	)
}
