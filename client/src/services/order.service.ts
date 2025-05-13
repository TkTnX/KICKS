import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IOrder } from "@/types"

class OrdersService {
	async getAll(limit?: number): Promise<IOrder[]> {
		const { data } = await axiosInstance.get(
			`${URL_CONFIG.orders.all}?limit=${limit}`
		)
		return data
	}
	async getAllByUserId(): Promise<IOrder[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.orders.index)
		return data
	}
}

export default new OrdersService()
