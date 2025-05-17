import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { ISize } from "@/types"

class SizeService {
	async getAll(): Promise<ISize[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.size.index)
		return data
	}

	async create(size: string): Promise<ISize> {
		const { data } = await axiosInstance.post(URL_CONFIG.size.index, {
			size
		})
		return data
	}

	async delete(id: string): Promise<ISize> {
		const { data } = await axiosInstance.delete(
			`${URL_CONFIG.size.index}/${id}`
		)
		return data
	}
}

export default new SizeService()
