import { ICartItem } from "./cart.interface";
import { IProduct } from "./product.interface";





export interface ICheckout {
	products: ICartItem[]
	totalPrice: number
	deliveryType: EDeliveryType
	phone: string
	email: string
	firstname: string
	lastname: string
	address: string
}

export enum EDeliveryType {
	STANDARD = 'standard',
	STORE = "store"
}