import { Metadata } from "next"

import { Orders } from "@/components/widgets/Orders"

export const metadata: Metadata = {
	title: "Orders"
}

// TODO: ТУТ Получать заказы только пользователя, а не всех юзеров, как сейчас! 

const OrdersPage = () => {
	return <Orders />
}

export default OrdersPage
