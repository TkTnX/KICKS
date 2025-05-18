import { EGender } from "generated/prisma"

export class EditUserDto {
    name: string
    email: string
    gender: EGender
    image: string
}