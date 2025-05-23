import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCart(userId: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId },
      include: {
        cartItems: {
          include: {
            product: { include: { category: true } },
            size: true,
          },
        },
      },
    });

    if (!cart) throw new NotFoundException('Cart is not found!');

    return cart;
  }

  async countTotalPrice(userId: string) {
    const cart = await this.getCart(userId);

    const updated = await this.prismaService.cart.update({
      where: { id: cart.id },
      data: {
        totalPrice: cart.cartItems.reduce(
          (acc, curr) => acc + curr.product.price * curr.quantity,
          0,
        ),
      },
    });

    return updated.totalPrice;
  }
}
