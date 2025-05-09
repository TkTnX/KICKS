import { create } from "zustand"

interface ProductFormStore {
	categoryId: string
	sizeIds: string[]
	colorIds: string[]
	images: File[]

	setCategoryId: (id: string) => void
	setSizeIds: (ids: string[]) => void
	setColorIds: (ids: string[]) => void
	setImages: (image: File) => void
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
	setImages: image => {
		set(() => ({ images: [...get().images, image] }))
	}
}))
