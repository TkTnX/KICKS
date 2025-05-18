import { ICart } from "./cart.interface"
import { IFavoriteItem } from "./favoriteItem.inerface"
import { IOrder } from "./order.interface"
import { EGender } from "./product.interface"
import { IReview } from "./review.interface"

export enum ERole {
	USER = "USER",
	ADMIN = "ADMIN"
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
	reviews: IReview[]
	cartId: string
	createdAt: Date
	gender: EGender
}

export interface IUserInput {
	name: string,
	email: string,
	image: string,
	gender: string
}