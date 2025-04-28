import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { ICategory } from "@/types"

class CategoriesService {
	async getCategories(take?: number): Promise<ICategory[]> {
		const { data } = await axiosInstance.get(
			`${URL_CONFIG.categories.all}?take=${take}`
		)
		return data
	}

	async getCategoryBySlug(slug: string): Promise<ICategory> {
		const { data } = await axiosInstance.get(
			`${URL_CONFIG.categories.all}/${slug}`
		)
		return data
	}
}

export default new CategoriesService()
