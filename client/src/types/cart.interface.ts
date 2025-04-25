import { IColor, IProduct, ISize } from "./product.interface"

export interface ICartProduct extends IProduct {
	quantity: number
	size: ISize
	color: IColor
}

export interface ICart {
	id: string
	products: ICartProduct[]
	totalPrice: number
	totalQuantity: number
}
