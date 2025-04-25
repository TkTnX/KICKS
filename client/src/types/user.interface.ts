import { ICart } from "./cart.interface"
import { IOrder } from "./order.interface"
import { IProduct } from "./product.interface"

export enum ERole {
	USER = "user",
	ADMIN = "admin"
}

export interface IUser {
	id: string
	image?: string
	email: string
	role: ERole
	name?: string
	favorites: IProduct[]
	orders: IOrder[]
	cart: ICart
}
