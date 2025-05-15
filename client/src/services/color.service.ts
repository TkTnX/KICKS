import { URL_CONFIG } from "@/configs/url.config";
import { axiosInstance } from "@/lib/axiosInstance";
import { IColor, IColorInput } from "@/types";





class ColorService {
	async getAll(): Promise<IColor[]> {
		const { data } = await axiosInstance.get(URL_CONFIG.color.index)
		return data
	}

	async getColorById(colorId: string): Promise<IColor> {
		const { data } = await axiosInstance.get(`${URL_CONFIG.color.index}/${colorId}`)
		return data
	}

	async deleteColor(colorId: string): Promise<IColor> {
		const { data } = await axiosInstance.delete(
			`${URL_CONFIG.color.index}/${colorId}`
		)
		return data
	}

	async createColor(body: IColorInput): Promise<IColor> {
		const { data } = await axiosInstance.post(URL_CONFIG.color.index, body)
		return data
	}

	async editColor(body: IColorInput, colorId: string): Promise<IColor> {
		const { data } = await axiosInstance.patch(`${URL_CONFIG.color.index}/${colorId}`, body)
		return data
	}
}

export default new ColorService()