import { Metadata } from "next"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { MonthlyDate } from "@/components/ui/MonthlyDate"
import { DashboardStatistics } from "@/components/widgets/DashboardStatistics"

export const metadata: Metadata = {
	title: "Dashboard"
}

const breadcrumbsList = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "Dashboard"
	}
]

const DashboardPage = () => {
	return (
		<section>
			<div className='flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-end justify-between'>
				<div className='flex flex-col gap-1'>
					<h4 className='text-2xl font-sans font-semibold'>
						Dashboard
					</h4>
					<Breadcrumbs items={breadcrumbsList} />
				</div>
				<MonthlyDate />
			</div>
			<DashboardStatistics />
		</section>
	)
}

export default DashboardPage
