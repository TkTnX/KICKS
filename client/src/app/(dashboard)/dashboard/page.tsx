import { Metadata } from "next"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { DashboardStatistics } from "@/components/entities/DashboardStatistics"

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
			<div className='flex flex-col gap-1'>
				<h4 className='text-2xl font-sans font-semibold'>Dashboard</h4>
				<Breadcrumbs items={breadcrumbsList} />
			</div>
			<DashboardStatistics />
		</section>
	)
}

export default DashboardPage
