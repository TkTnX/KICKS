import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IMonthlyStatistics, IStatistics } from "@/types/statistics.interface"

class StatisticsService {
	async getStatistics(): Promise<IStatistics[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.statistics.index)
		return data
	}

	async getMonthlyStatistics(): Promise<IMonthlyStatistics> {
		const { data } = await axiosInstance.get(URL_CONFIG.statistics.monthly)
		return data
	}
}

export default new StatisticsService()
