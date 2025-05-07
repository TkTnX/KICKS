import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IFavoriteItem } from "@/types/favoriteItem.inerface"

class FavoriteItem {
	async addToFavorites(productId: string) {
		const { data } = await axiosInstance.post(
			`${URL_CONFIG.favoriteItem.index}/${productId}`
		)

		return data
	}

	async getAll(): Promise<IFavoriteItem[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.favoriteItem.index)
		return data
	}
}

export default new FavoriteItem()
