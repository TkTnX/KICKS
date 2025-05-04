import { IsNotEmpty } from 'class-validator';

export class CreateCartItem {
  @IsNotEmpty({ message: 'Cart is required' })
  cartId: string;

  @IsNotEmpty({ message: 'Size is required' })
  sizeId: string;

  @IsNotEmpty({ message: 'Color is required' })
  colorId: string;

  @IsNotEmpty({ message: 'Product is required' })
  productId: string;
}
