import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { PrismaService } from 'src/prisma.service';
import { CartService } from 'src/cart/cart.service';

@Module({
  controllers: [CartItemController],
  providers: [CartItemService, PrismaService, CartService],
})
export class CartItemModule {}
