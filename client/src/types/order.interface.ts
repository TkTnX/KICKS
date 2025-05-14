import { ICartItem } from "./cart.interface"
import { EDeliveryType } from "./checkout.interface"
import { IProduct } from "./product.interface"
import { IUser } from "./user.interface"

enum EDeliveryOptions {
	STANDARD = "Standard delivery",
	COLLECT = "Collect in store"
}

export enum EOrderStatus {
	PAYED = "PAYED",
	PENDING = "PENDING",
	CANCELED = "CANCELED"
}

export interface IOrder {
	id: string
	deliveryOptions: EDeliveryOptions
	deliveryPrice: number
	totalPrice: number
	createdAt: string
	updatedAt: string
	products: ICartItem[]
	user: IUser
	status: EOrderStatus
}

export interface IOrderItem {
	id: string
	product: IProduct
	productId: string
	quantity: number
}
