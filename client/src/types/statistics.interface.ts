import { ICartItem } from "./cart.interface";
import { IOrderItem } from "./order.interface";





export interface IStatistics {
	id: number
	name: string
	value: any
}

export interface IMonthlyStatistics {
	monthlySales: { date: string; income: number }[]
	lastProducts: IOrderItem[]
}