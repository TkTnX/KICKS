import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IOrder } from "@/types"
import { ICheckout } from "@/types/checkout.interface"

class OrdersService {
	async getAll(limit?: number): Promise<IOrder[]> {
		const { data } = await axiosInstance.get(
			`${URL_CONFIG.orders.all}?limit=${limit}`
		)
		return data
	}
	async getOneById(orderId: string): Promise<IOrder> {
		const { data } = await axiosInstance.get(
			`${URL_CONFIG.orders.index}/${orderId}`
		)
		return data
	}
	async getAllByUserId(): Promise<IOrder[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.orders.index)
		return data
	}

	async checkout(body: ICheckout) {
		const { data } = await axiosInstance.post(URL_CONFIG.orders.place, body)
		return data
	}

	async deleteOrder(orderId: string) {
		const { data } = await axiosInstance.delete(
			`${URL_CONFIG.orders.index}/${orderId}`
		)

		return data
	}
}

export default new OrdersService()
