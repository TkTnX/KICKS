import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CartItem, EDeliveryType, EnumOrderStatus } from 'generated/prisma';

export class OrderDto {
  @IsOptional()
  @IsEnum(EnumOrderStatus, {
    message:
      'Order status must be one of: ' +
      Object.values(EnumOrderStatus).join(', '),
  })
  status: EnumOrderStatus;

  @IsArray({
    message: 'There is no any products!',
  })
  products: CartItem[];

  @IsNumber({}, { message: 'Total price must be a number' })
  totalPrice: number;

  @IsEnum(EDeliveryType, {
    message:
      'Delivery type must be one of: ' +
      Object.values(EDeliveryType).join(', '),
  })
  deliveryType: EDeliveryType;

  @IsString({ message: 'Phone number must be a string' })
  phone: string;
  @IsString({ message: 'email must be a string' })
  email: string;
  @IsString({ message: 'firstname must be a string' })
  firstname: string;
  @IsString({ message: 'lastname must be a string' })
  lastname: string;
  @IsString({ message: 'address must be a string' })
  address: string;
}
