import { Metadata } from "next"

import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { Orders } from "@/components/widgets/Orders"

export const metadata: Metadata = {
	title: "Orders"
}

const breadcrumbs = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "Order List"
	}
]

const OrdersPage = () => {
	return (
		<section>
			<div className='flex flex-col gap-1'>
				<h4 className='text-2xl font-sans font-semibold'>
					Orders List
				</h4>
				<Breadcrumbs items={breadcrumbs} />
			</div>
			<Orders />
		</section>
	)
}

export default OrdersPage
