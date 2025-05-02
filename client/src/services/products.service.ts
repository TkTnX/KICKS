import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IProduct } from "@/types"

class ProductsService {
	async getProducts(
		take?: number | null,
		skip?: number | null,
		params?: Record<string, string>
	): Promise<IProduct[]> {
		const { data } = await axiosInstance.get(`${URL_CONFIG.products.all}`, {
			params: {
				take,
				skip,
				...params
			}
		})
		return data
	}
}

export default new ProductsService()
