import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { IUserInput } from "@/types"

class UserService {
	async getMe() {
		const { data: response } = await axiosInstance.get(URL_CONFIG.users.me)
		return response
	}

	async edit(body: IUserInput) {
		const { data } = await axiosInstance.patch(URL_CONFIG.users.index, body)
		return data
	}
}

export default new UserService()
