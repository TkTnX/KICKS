import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IOrder } from "@/types"

class OrdersService {
	async getAll(): Promise<IOrder[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.orders.index)
		return data
	}
}

export default new OrdersService()
