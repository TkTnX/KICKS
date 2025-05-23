import { IProduct } from "./product.interface"

export interface ICategory {
	id: string
	name: string
	slug: string
	products?: IProduct[]
	_count: {
		products: number
	}
}
