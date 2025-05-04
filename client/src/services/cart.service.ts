import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { ICart } from "@/types"

class CartService {
	async getCart(): Promise<ICart> {
		const { data } = await axiosInstance.get(URL_CONFIG.cart.get)
		return data
	}
}

export default new CartService()
