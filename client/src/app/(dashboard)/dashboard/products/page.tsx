import { AddNewProduct } from "@/components/features/AddNewProduct"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
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
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<h4 className='text-2xl font-sans font-semibold'>
						All Products
					</h4>
					<Breadcrumbs items={breadcrumbsList} />
				</div>
				<AddNewProduct />
			</div>
			<DashboardProductsList />
		</div>
	)
}

export default DashboardProductsPage
