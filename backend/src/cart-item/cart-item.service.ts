import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateCartItem } from './dto/create-cartItem.dto';
import { PrismaService } from 'src/prisma.service';
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class CartItemService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cartService: CartService,
  ) {}
  async addToCart(dto: CreateCartItem, userId: string) {
    const { cartId, colorId, productId, sizeId } = dto;
    const findInCart = await this.prismaService.cartItem.findFirst({
      where: {
        cartId,
        productId,
      },
    });

    if (findInCart) {
      await this.prismaService.cartItem.update({
        where: { id: findInCart.id },
        data: { quantity: findInCart.quantity + 1 },
      });

      return this.cartService.countTotalPrice(userId);
    }

    const cartItem = await this.prismaService.cartItem.create({
      data: {
        cartId,
        colorId,
        productId,
        sizeId,
      },
    });

    this.cartService.countTotalPrice(userId);
    if (!cartItem) throw new BadGatewayException('Unable to add to cart');
    return cartItem;
  }

  async removeFromCart(id: string, userId: string) {
    const deleted = await this.prismaService.cartItem.delete({ where: { id } });

    if (!deleted) throw new BadGatewayException('Unable to remove from cart!');
    this.cartService.countTotalPrice(userId)
    return deleted;
  }
}
