import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { ISize } from "@/types"

class SizeService {
	async getAll(): Promise<ISize[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.size.index)
		return data
	}
}

export default new SizeService()
