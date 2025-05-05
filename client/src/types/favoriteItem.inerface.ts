import { IProduct } from "./product.interface"

export interface IFavoriteItem {
    productId: string
    product: IProduct

    userId: string
}