import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IReview } from "@/types"

class ReviewsService {
	async getLastThree(): Promise<IReview[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.reviews.lastThree)

		return data
	}
}

export default new ReviewsService()
