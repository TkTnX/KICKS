import { IColor } from "./color.interface"
import { IProduct } from "./product.interface"
import { ISize } from "./size.interface"

export type AddToCartProps = {
	cartId: string
	productId: string
	colorId: string
	sizeId: string
}

export interface ICartItem {
	id: string,
	quantity: number
	size: ISize
	color: IColor
	product: IProduct
}

export interface ICart {
	id: string
	cartItems: ICartItem[]
	totalPrice: number
}
