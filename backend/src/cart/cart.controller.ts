import { Controller, Get, Post, Req } from '@nestjs/common';
import { CartService } from './cart.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Authorization()
  @Get()
  async getCart(@Authorized('id') userId: string) {
    return await this.cartService.getCart(userId);
  }

  @Authorization()
  @Get('/total-price')
  async countTotalPrice(@Authorized('id') userId: string) {
    return await this.cartService.countTotalPrice(userId);
  }
}
