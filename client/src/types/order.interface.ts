import { ICart } from "./cart.interface"
import { IProduct } from "./product.interface"
import { IUser } from "./user.interface"

enum EDeliveryOptions {
	STANDARD = "Standard delivery",
	COLLECT = "Collect in store"
}

enum EOrderStatus {
	PENDING = "Pending",
	CONFIRMED = "Confirmed",
	SHIPPED = "Shipped"
}

export interface IOrder {
	id: string
	deliveryOptions: EDeliveryOptions
	deliveryPrice: number
	totalPrice: number
	createdAt: string
	updatedAt: string
	products: IProduct[]
	user: IUser
}
