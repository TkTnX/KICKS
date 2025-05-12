import { ICartItem } from "./cart.interface";





export interface IStatistics {
	id: number
	name: string
	value: any
}

export interface IMonthlyStatistics {
	monthlySales: { date: string; income: number }[]
	lastProducts: ICartItem[]
}