import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { PrismaService } from 'src/prisma.service';

dayjs.locale('en');

const monthNames = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sen',
  'oct',
  'nov',
  'dec',
];

@Injectable()
export class StatisticsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMainStatistics() {
    const averageRating = await this.calculateAverageRating();
    const ordersInformation = await this.getOrdersInformation();
    return [
      { id: 1, name: 'Average rating', value: averageRating },
      { id: 2, name: 'Orders Info', value: ordersInformation },
    ];
  }

  async getMonthlyStatistics() {
    const monthlySales = await this.calculateMonthlySales();
    const lastProducts = await this.getLastProducts();

    return { monthlySales, lastProducts };
  }

  private async calculateAverageRating() {
    const averageRating = await this.prismaService.review.aggregate({
      _avg: { rating: true },
    });
    return averageRating._avg.rating;
  }

  private async calculateMonthlySales() {
    const startDate = dayjs().subtract(30, 'days').startOf('day').toDate();
    const endDate = dayjs().endOf('day').toDate();

    const salesRaw = await this.prismaService.order.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        products: {
          include: { product: true },
        },
      },
    });

    const formatDate = (date: Date): string => {
      return `${date.getDate()} ${monthNames[date.getMonth()]}`;
    };

    const salesByDate = new Map<string, number>();

    salesRaw.forEach((order) => {
      const formattedDate = formatDate(new Date(order.createdAt));

      if (salesByDate.has(formattedDate)) {
        salesByDate.set(
          formattedDate,
          salesByDate.get(formattedDate)! + order.totalPrice,
        );
      } else {
        salesByDate.set(formattedDate, order.totalPrice);
      }
    });

    const monthlySales = Array.from(salesByDate, ([date, value]) => ({
      date,
      income: value,
    }));

    return monthlySales;
  }

  private async getLastProducts() {
    const lastProducts = await this.prismaService.order.findMany({
      where: {
        status: 'PAYED',
      },
      select: {
        products: { include: { product: true } },
      },
      take: 5,
    });


    return lastProducts.flatMap((product) => product.products);
  }

  private async getOrdersInformation() {
    const totalOrdersAmount = await this.prismaService.order.findMany({
      select: { totalPrice: true },
    });
    const totalOrders = await this.prismaService.order.count();

    const activeOrdersAmount = await this.prismaService.order.findMany({
      where: { status: 'PENDING' },
      select: { totalPrice: true },
    });
    const activeOrders = await this.prismaService.order.count({
      where: { status: 'PENDING' },
    });

    const completedOrdersAmount = await this.prismaService.order.findMany({
      where: { status: 'PAYED' },
      select: { totalPrice: true },
    });
    const completedOrders = await this.prismaService.order.count({
      where: { status: 'PAYED' },
    });

    return {
      totalOrders: {
        items: totalOrders,
        amount: totalOrdersAmount.reduce(
          (acc, item) => item.totalPrice + acc,
          0,
        ),
      },
      activeOrders: {
        items: activeOrders,
        amount: activeOrdersAmount.reduce(
          (acc, item) => item.totalPrice + acc,
          0,
        ),
      },
      completedOrders: {
        items: completedOrders,
        amount: completedOrdersAmount.reduce(
          (acc, item) => item.totalPrice + acc,
          0,
        ),
      },
    };
  }
}
