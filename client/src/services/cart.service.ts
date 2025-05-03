import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"

class CartService {
	async getCart() {
		const { data } = await axiosInstance.get(URL_CONFIG.cart.get)
		return data
	}
}

export default new CartService()
