import { Body, Controller, Post } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { CreateCartItem } from './dto/create-cartItem.dto';

@Controller('cartItems')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Authorization()
  @Post()
  async addToCart(@Body() dto: CreateCartItem) {
    return this.cartItemService.addToCart(dto);
  }
}
