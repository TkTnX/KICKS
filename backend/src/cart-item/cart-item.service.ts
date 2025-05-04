import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateCartItem } from './dto/create-cartItem.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartItemService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}
  async addToCart(dto: CreateCartItem) {
    const { cartId, colorId, productId, sizeId } = dto;
    const findInCart = await this.prismaService.cartItem.findFirst({
      where: {
        cartId,
        productId,
      },
    });

    if (findInCart) {
      return await this.prismaService.cartItem.update({
        where: { id: findInCart.id },
        data: { quantity: findInCart.quantity + 1 },
      });
    }

    const cartItem = await this.prismaService.cartItem.create({
      data: {
        cartId,
        colorId,
        productId,
        sizeId,
      },
    });

    if (!cartItem) throw new BadGatewayException('Unable to add to cart');
    return cartItem;
  }
}
