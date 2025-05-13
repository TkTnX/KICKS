import { Injectable } from '@nestjs/common';
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

  async getAll() {
    const orders = await this.prismaService.order.findMany({
      include: {
        products: { include: { product: true } },
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
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

  async createPayment(dto: OrderDto, userId: string) {
    console.log(dto);
    const order = await this.prismaService.order.create({
      data: {
        ...dto,
        products: {
          connect: dto.products.map((product) => ({ id: product.id })),
        },
        userId,
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
}
