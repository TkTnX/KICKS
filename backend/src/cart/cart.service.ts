import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCart(userId: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId },
      include: { cartItems: true },
    });

    return cart;
  }
}
