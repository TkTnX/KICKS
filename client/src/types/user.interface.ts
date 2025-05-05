import { ICart } from "./cart.interface"
import { IFavoriteItem } from "./favoriteItem.inerface"
import { IOrder } from "./order.interface"

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
	favoriteItems: IFavoriteItem[]
	orders: IOrder[]
	cart: ICart
	cartId: string
}
