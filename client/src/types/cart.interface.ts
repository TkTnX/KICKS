import { IColor } from "./color.interface"
import { IProduct } from "./product.interface"
import { ISize } from "./size.interface"

export interface ICartItem extends IProduct {
	quantity: number
	size: ISize
	color: IColor
}

export interface ICart {
	id: string
	cartItems: ICartItem[]
	totalPrice: number
	
}
