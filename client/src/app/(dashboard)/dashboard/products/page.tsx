import { PlusCircle } from "lucide-react"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { Link } from "@/components/ui/Link"
import { DashboardProductsList } from "@/components/widgets/DashboardProductsList"

const breadcrumbsList = [
	{
		name: "Home",
		link: "/dashboard"
	},
	{
		name: "All Products"
	}
]

const DashboardProductsPage = () => {
	return (
		<div>
			<div className='flex flex-col vsm:flex-row gap-2 vsm:items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<h4 className='text-2xl font-sans font-semibold'>
						All Products
					</h4>
					<Breadcrumbs items={breadcrumbsList} />
				</div>
				<Link
					href='/dashboard/create'
					className='flex items-center gap-2 text-white font-sans text-sm uppercase font-medium py-4 px-6 bg-dark-gray w-full vsm:w-auto justify-center'
				>
					<PlusCircle color='#fff' />
					ADD NEW PRODUCT
				</Link>
			</div>
			<DashboardProductsList />
		</div>
	)
}

export default DashboardProductsPage
