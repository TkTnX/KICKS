import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { AddToCartProps } from "@/types"

class CartItemService {
	async addToCart(body: AddToCartProps) {
		const { cartId, colorId, productId, sizeId } = body
		const { data } = await axiosInstance.post(URL_CONFIG.cartItem.index, {
			cartId,
			colorId,
			productId,
			sizeId
		})

		return data
	}

	async removeFromCart(id: string) {
		const { data } = await axiosInstance.delete(
			`${URL_CONFIG.cartItem.index}/${id}`
		)

		return data
	}
}

export default new CartItemService()
