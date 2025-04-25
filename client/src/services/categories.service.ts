import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"

class CategoriesService {
	async getCategories() {
		const { data } = await axiosInstance.get(URL_CONFIG.categories.all)
		console.log(data)
		return data
	}
}

export default new CategoriesService()
