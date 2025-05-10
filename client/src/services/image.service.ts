import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"

class ImageService {
	async upload(file: File, productId:string, folder: string) {
		const formData = new FormData()
		formData.append("image", file)

		const { data } = await axiosInstance.post(
			`${URL_CONFIG.image.index}/${productId}/${folder}`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data"
				}
			}
		)
		return data
	}

	async delete(path: string) {
		console.log(path)
		const encoded = encodeURIComponent(path)
		const { data } = await axiosInstance.delete(
			`${URL_CONFIG.image.index}?path=${encoded}`
		)
		return data
	}
}

export default new ImageService()
