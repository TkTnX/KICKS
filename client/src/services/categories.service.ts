import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { ICategory } from "@/types"

class CategoriesService {
	async getCategories(take?: number): Promise<ICategory[]> {
		const { data } = await axiosInstance.get(
			`${URL_CONFIG.categories.index}?take=${take}`
		)
		return data
	}

	async getCategoryBySlug(slug: string): Promise<ICategory> {
		const { data } = await axiosInstance.get(
			`${URL_CONFIG.categories.index}/${slug}`
		)
		return data
	}

	async deleteCategory(categoryId: string): Promise<ICategory> {
		const { data } = await axiosInstance.delete(
			`${URL_CONFIG.categories.index}/${categoryId}`
		)
		return data
	}
}

export default new CategoriesService()
