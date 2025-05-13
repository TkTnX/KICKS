"use client"

import { useQuery } from "@tanstack/react-query"
import { ActivitySquare, BaggageClaimIcon, Check } from "lucide-react"

import { DashboardOrderInfo } from "@/components/entities/DashboardStatistics/DashboardOrderInfo"

import statisticsService from "@/services/statistics.service"

import { Orders } from "../Orders"

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
			<div className='flex flex-col vsm:flex-row-reverse vsm:grid  grid-cols-2 md:flex sm:items-center justify-between gap-3.5 mt-6'>
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
					className='vsm:col-span-2 md:col-span-1'
				/>
			</div>
			{/* SALES GRAPH */}
			<MonthlyStatistics />
			<Orders />
		</div>
	)
}
