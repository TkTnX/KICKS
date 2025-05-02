export interface ICategory {
	id: string
	name: string
	slug: string
	_count: {
		products: number
	}
}
