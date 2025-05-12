import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IStatistics } from "@/types/statistics.interface"

class StatisticsService {
	async getStatistics(): Promise<IStatistics[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.statistics.index)
		return data
	}
}

export default new StatisticsService()
