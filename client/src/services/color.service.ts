import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IColor } from "@/types"

class ColorService {
	async getAll(): Promise<IColor[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.color.index)
		return data
	}
}

export default new ColorService()
