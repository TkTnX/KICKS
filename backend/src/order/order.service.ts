import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ICapturePayment, YooCheckout } from '@a2seven/yoo-checkout';
import { OrderDto } from './dto/order.dto';
import { PaymentStatusDto } from './dto/payment-status.dto';
import { EnumOrderStatus } from 'generated/prisma';

const checkout = new YooCheckout({
  secretKey: process.env['YOOKASSA_SECRET_KEY']!,
  shopId: process.env['YOOKASSA_SHOP_ID']!,
});

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(limit?: string) {
    const orders = await this.prismaService.order.findMany({
      include: {
        products: { include: { product: true } },
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: Number(limit) || undefined,
    });

    return orders;
  }

  async getAllByUserId(userId: string) {
    const orders = await this.prismaService.order.findMany({
      where: { userId },
      include: {
        products: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });

    return orders;
  }

  async createPayment(dto: OrderDto, userId: string) {
    const order = await this.prismaService.order.create({
      data: {
        ...dto,
        products: {
          create: dto.products.map((cartItem) => ({
            productId: cartItem.productId,
            quantity: cartItem.quantity,
          })),
        },
        userId,
      },
      include: { products: true },
    });

    await this.prismaService.cartItem.deleteMany({
      where: {
        productId: {
          in: order.products.map((p) => p.productId),
        },
      },
    });

    await this.prismaService.cart.update({
      where: {
        userId,
      },
      data: {
        totalPrice: 0,
      },
    });

    const payment = await checkout.createPayment({
      amount: {
        value: dto.totalPrice.toFixed(2),
        currency: 'RUB',
      },
      payment_method_data: {
        type: 'bank_card',
      },
      confirmation: {
        type: 'redirect',
        return_url: `${process.env.CLIENT_URL}/thanks`,
      },
      description: `Payment for the order #${order.id}`,
    });

    return payment;
  }

  async updateStatus(dto: PaymentStatusDto) {
    if (dto.event === 'payment.waiting_for_capture') {
      const capturePayment: ICapturePayment = {
        amount: {
          value: dto.object.amount.value,
          currency: dto.object.amount.currency,
        },
      };

      return checkout.capturePayment(dto.object.id, capturePayment);
    }
    if (dto.event === 'payment.succeeded') {
      const orderId = dto.object.description.split('#')[1];

      await this.prismaService.order.update({
        where: { id: orderId },
        data: {
          status: EnumOrderStatus.PAYED,
        },
      });

      const orderItems = await this.prismaService.orderItem.findMany({
        where: {
          orders: {
            some: { id: orderId },
          },
        },
        select: {
          productId: true,
          product: true,
        },
      });

      await Promise.all(
        orderItems.map((item) =>
          this.prismaService.product.update({
            where: { id: item.productId },
            data: {
              totalSales: {
                increment: item.product.totalSales + 1,
              },
            },
          }),
        ),
      );

      return true;
    }

    if (dto.event === 'payment.canceled') {
      const orderId = dto.object.description.split('#')[1];

      await this.prismaService.order.update({
        where: { id: orderId },
        data: {
          status: EnumOrderStatus.CANCELED,
        },
      });

      return true;
    }

    return true;
  }

  async getOrderById(orderId: string) {
    const order = await this.prismaService.order.findFirst({
      where: { id: orderId },
      include: {
        products: { include: { product: true } },
      },
    });

    if (!order) throw new NotFoundException('Order is not found');

    return order;
  }

  async deleteOrder(orderId: string) {
    await this.getOrderById(orderId);

    const deletedOrder = await this.prismaService.order.delete({
      where: { id: orderId },
    });

    return deletedOrder;
  }
}
