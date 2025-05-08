import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const orders = await this.prismaService.order.findMany({
      include: {
        products: true,
        user: true,
      },
    });

    return orders;
  }

  async getAllByUserId(userId: string) {
    const orders = await this.prismaService.order.findMany({
      where: { userId },
      include: {
        products: true,
        user: true,
      },
    });

    return orders;
  }
}
