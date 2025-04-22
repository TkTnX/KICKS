import { ICategory } from "./category.interface"
import { IColor } from "./color.interface"
import { ISize } from "./size.interface"

export interface IProduct {
	id: string
	title: string
	price: number
	colors: IColor[]
	sizes: ISize[]
	description: string
	images: string[]
	category: ICategory
	gender?: EGender

	createdAt: Date
	updatedAt: Date
}




export enum EGender {
	MEN = "men",
	WOMEN = "women",
	KIDS = "kids"
}
