import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IProduct } from "@/types"

class ProductsService {
	async getProducts(
		take?: number | null,
		params?: Record<string, string>
	): Promise<IProduct[]> {
		const { data } = await axiosInstance.get(`${URL_CONFIG.products.all}`, {
			params: {
				take,
				...params
			}
		})
		return data
	}

	async countPages(limit: number) {
		const { data } = await axiosInstance.get(
			URL_CONFIG.products.countPages,
			{ params: { limit } }
		)
		return data
	}

	async getByCategory(categories: string[]): Promise<IProduct[]>  {
		const { data } = await axiosInstance.get(
			URL_CONFIG.products.byCategory,
			{
				params: {
					categories: categories.join(",")
				}
			}
		)

		return data
	}
}

export default new ProductsService()
