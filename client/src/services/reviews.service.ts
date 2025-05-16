import { URL_CONFIG } from "@/configs/url.config";
import { axiosInstance } from "@/lib/axiosInstance";
import { IReview, IReviewInput } from "@/types";





class ReviewsService {
	async getAll(): Promise<IReview[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.reviews.all)
		return data
	}
	async getAllByUserId(): Promise<IReview[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.reviews.index)
		return data
	}
	async getAllByProductId(productId: string): Promise<IReview[]> {
		const { data } = await axiosInstance.get(`${URL_CONFIG.reviews.index}/${productId}`)
		return data
	}

	async getLastThree(): Promise<IReview[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.reviews.lastThree)

		return data
	}

	async create(body: IReviewInput, productId: string) {
		const { data } = await axiosInstance.post(
			`${URL_CONFIG.reviews.index}/${productId}`,
			body
		)
		return data
	}

	async delete(reviewId: string) {
		const { data } = await axiosInstance.delete(
			`${URL_CONFIG.reviews.index}/${reviewId}`
		)
		return data
	}
}

export default new ReviewsService()