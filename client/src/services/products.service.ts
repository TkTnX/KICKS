import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IProduct } from "@/types"

class ProductsService {
	async getProducts(take?: number): Promise<IProduct[]> {
		const { data } = await axiosInstance.get(
			`${URL_CONFIG.products.all}?take=${take}`
		)
		return data
	}
}

export default new ProductsService()
