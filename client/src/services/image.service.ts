import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"

class ImageService {
	async upload(file: File, folder: string, productId?: string) {
		const formData = new FormData()
		formData.append("image", file)
		const url = productId
			? `${URL_CONFIG.image.index}/${productId}/${folder}`
			: `${URL_CONFIG.image.index}/${folder}`
		const { data } = await axiosInstance.post(url, formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
		return data
	}

	async delete(path: string) {
		const encoded = encodeURIComponent(path)
		const { data } = await axiosInstance.delete(
			`${URL_CONFIG.image.index}?path=${encoded}`
		)
		return data
	}
}

export default new ImageService()
