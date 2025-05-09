import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"

class ImageService {
	async upload(file: File, folder: string) {
		const formData = new FormData()
        formData.append("image", file)
        
		const { data } = await axiosInstance.post(
			`${URL_CONFIG.image.index}/${folder}`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data"
				}
			}
		)
		return data
	}
}

export default new ImageService()
