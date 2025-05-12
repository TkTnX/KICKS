import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"

import { IMonthlyStatistics } from "@/types/statistics.interface"

const chartConfig = {
	income: {
		label: "income",
		color: "#759af9"
	}
} satisfies ChartConfig

export const DashboardSales = ({ data }: { data: IMonthlyStatistics }) => {
	return (
		<div className='h-[392px] flex-2/3 bg-white py-6 px-4 rounded-2xl'>
			<h5 className='font-sans text-xl'>Sale Graph</h5>
			<div className='h-[0.5px] w-full bg-dark-gray/50 mt-4 mb-8' />
			<ChartContainer config={chartConfig}>
				<AreaChart accessibilityLayer data={data?.monthlySales}>
					<CartesianGrid vertical={false} />
					<XAxis dataKey='date' tickLine={false} axisLine={false} />
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent indicator='line' />}
					/>
					<Area
						dataKey='income'
						type='natural'
						fillOpacity={0.4}
						fill='transparent'
					/>
				</AreaChart>
			</ChartContainer>
		</div>
	)
}
