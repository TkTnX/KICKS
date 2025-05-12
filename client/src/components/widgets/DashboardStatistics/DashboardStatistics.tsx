"use client"

import { useQuery } from "@tanstack/react-query"
import {
	ActivitySquare,
	BaggageClaimIcon,
	Check,
	CreditCard
} from "lucide-react"

import statisticsService from "@/services/statistics.service"
import { DashboardOrderInfo } from "@/components/entities/DashboardStatistics/DashboardOrderInfo"
import { DashboardSales } from "@/components/entities/DashboardStatistics/DashboardSales"
import { DashboardLastSales } from "@/components/entities/DashboardStatistics/DashboardLastSales"
import { MonthlyStatistics } from "./MonthlyStatistics"


export const DashboardStatistics = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["dashbord orders info"],
		queryFn: () => statisticsService.getStatistics()
	})

	if (!data) return null

	const ordersInformation = data.find(statistic =>
		statistic.name.includes("Orders")
	)?.value


	return (
		<div>
			{/* ORDERS STATISTICS */}
			<div className='flex items-center justify-between gap-3.5 mt-6'>
				<DashboardOrderInfo
					title='Total Orders'
					value={ordersInformation.totalOrders}
					Icon={BaggageClaimIcon}
				/>
				<DashboardOrderInfo
					title='Active Orders'
					value={ordersInformation.activeOrders}
					Icon={ActivitySquare}
				/>
				<DashboardOrderInfo
					title='Completed Orders'
					value={ordersInformation.completedOrders}
					Icon={Check}
				/>
			</div>
			{/* SALES GRAPH */}
			<MonthlyStatistics />
		</div>
	)
}
