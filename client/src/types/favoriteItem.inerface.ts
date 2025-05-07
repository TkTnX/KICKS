import { IProduct } from "./product.interface"

export interface IFavoriteItem {
    id: string
    productId: string
    product: IProduct

    userId: string
}