import { ICart } from "./cart.interface";

enum EDeliveryOptions {
    STANDARD = "Standard delivery",
    COLLECT = "Collect in store",
}

enum EOrderStatus {
    PENDING = "Pending",
    CONFIRMED = "Confirmed",
    SHIPPED = "Shipped",
}

export interface IOrder extends ICart {
    id: string,
    deliveryOptions: EDeliveryOptions,
    deliveryPrice: number,
    totalPrice: number,
    createdAt: string,
    updatedAt: string,
    status: EOrderStatus,
}