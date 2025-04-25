import { URL_CONFIG } from "@/configs/url.config"
import { axiosInstance } from "@/lib/axiosInstance"
import { EGender } from "@/types"
import { IAuthForm } from "@/types/auth.interface"

class AuthService {
	async register(data: IAuthForm & { gender: EGender }) {
		const { data: response } = await axiosInstance.post(
			URL_CONFIG.auth.register,
			data
		)
		return response
	}

	async login(data: IAuthForm) {
		const { data: response } = await axiosInstance.post(
			URL_CONFIG.auth.login,
			data
		)
		return response
	}
}

export default new AuthService()
