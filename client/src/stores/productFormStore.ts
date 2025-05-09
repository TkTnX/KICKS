import { create } from "zustand";





interface ProductFormStore {
	categoryId: string
	sizeIds: string[]
	colorIds: string[]
	images: string[]

	setCategoryId: (id: string) => void
	setSizeIds: (ids: string[]) => void
	setColorIds: (ids: string[]) => void
	setImages: (images: string[]) => void
}

export const useProductFormStore = create<ProductFormStore>((set, get) => ({
	categoryId: "",
	sizeIds: [],
	colorIds: [],
	images: [],

	setCategoryId: id => {
		set(() => ({ categoryId: id }))
	},
	setSizeIds: ids => {
		set(() => ({ sizeIds: ids }))
	},
	setColorIds: ids => {
		set(() => ({ colorIds: ids }))
	},
	setImages: images => {
		set(() => ({ images }))
	}
}))