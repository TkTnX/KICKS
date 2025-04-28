import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"

class UserService {
	async getMe() {
		const { data: response } = await axiosInstance.get(URL_CONFIG.users.me)
		return response
	}
}

export default new UserService()
