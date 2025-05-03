import { Controller, Get, Req } from '@nestjs/common';
import { CartService } from './cart.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { Request } from 'express';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Authorization()
  @Get()
  async getCart(@Authorized('id') userId: string, @Req() req: Request) {
    return await this.cartService.getCart(userId);
  }
}
