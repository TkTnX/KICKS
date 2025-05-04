import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { CreateCartItem } from './dto/create-cartItem.dto';
import { Authorized } from 'src/auth/decorators/authorized.decorator';

@Controller('cartItems')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Authorization()
  @Post()
  async addToCart(@Body() dto: CreateCartItem, @Authorized('id') userId) {
    return this.cartItemService.addToCart(dto, userId);
  }

  @Authorization()
  @Delete(':id')
  async removeFromCart(
    @Param('id') id: string,
    @Authorized('id') userId: string,
  ) {
    return this.cartItemService.removeFromCart(id, userId);
  }
}
