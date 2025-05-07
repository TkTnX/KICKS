import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(userId: string) {
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
