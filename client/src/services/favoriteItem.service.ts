import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"

class FavoriteItem {
	async addToFavorites(productId: string) {
		const { data } = await axiosInstance.post(
			`${URL_CONFIG.favoriteItem.index}/${productId}`
		)

		return data
	}
}

export default new FavoriteItem()
