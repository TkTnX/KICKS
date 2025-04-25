import { IUser } from "./user.interface";

export interface IReview {
    id: string
    title: string,
    text: string,
    rating: number,
    image?: string,
    user: IUser,
}