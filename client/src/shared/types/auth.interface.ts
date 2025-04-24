import { EGender } from "./product.interface"

export interface IAuthForm {
	email: string
	password: string
	username?: string
	gender?: EGender
}
