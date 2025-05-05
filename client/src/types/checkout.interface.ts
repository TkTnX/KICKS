export interface ICheckout {
	email: string
	firstname: string
	lastname: string
	address: string
	phone: string
	deliveryType: EDeliveryType
}

export enum EDeliveryType {
	STANDARD = 'standard',
	STORE = "store"
}
