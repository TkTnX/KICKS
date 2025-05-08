import { Metadata } from "next"

import { Orders } from "@/components/widgets/Orders"

export const metadata: Metadata = {
	title: "Orders"
}


const OrdersPage = () => {
	return <Orders />
}

export default OrdersPage
