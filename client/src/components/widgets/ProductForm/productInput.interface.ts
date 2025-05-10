export interface IProductInput {
	title: string
	description: string
	categoryId: string
	sizes: string[]
	colors: string[]
	price: number
	images: string[] | null
}
