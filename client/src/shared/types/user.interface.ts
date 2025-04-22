import { ICart } from "./cart.interface";
import { IOrder } from "./order.interface";
import { IProduct } from "./product.interface";

export interface IUser {
    id: string,
    image?: string,
    email: string,
    favorites: IProduct[],
    orders: IOrder[],
    cart: ICart,
}