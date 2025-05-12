"use client"

import { useQuery } from "@tanstack/react-query"
import { ActivitySquare, BaggageClaimIcon, Check } from "lucide-react"

import statisticsService from "@/services/statistics.service"

import { DashboardOrderInfo } from "./DashboardOrderInfo"

export const DashboardStatistics = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["dashbord orders info"],
		queryFn: () => statisticsService.getStatistics()
	})

	if (!data) return null

	const ordersInformation = data.find(statistic =>
		statistic.name.includes("Orders")
	)?.value

	console.log(ordersInformation)

	return (
		<div className='flex items-center justify-between gap-3.5'>
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
	)
}
