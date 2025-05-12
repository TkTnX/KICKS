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
    const totalRevenue = await this.calculateTotalRevenue();

    const averageRating = await this.calculateAverageRating();
    const ordersInformation = await this.getOrdersInformation();
    return [
      { id: 1, name: 'Revenue', value: totalRevenue },
      { id: 2, name: 'Average rating', value: averageRating },
      { id: 3, name: 'Orders Info', value: ordersInformation },
    ];
  }

  async getMonthlyStatistics() {
    const monthlySales = await this.calculateMonthlySales();
    const lastProducts = await this.getLastProducts();

    return { monthlySales, lastProducts };
  }

  private async calculateTotalRevenue() {
    const orders = await this.prismaService.order.findMany({
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    });

    const totalRevenue = orders.reduce(
      (acc, order) => acc + order.totalPrice,
      0,
    );
    return totalRevenue;
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

      const total = order.products.reduce((total, cartItem) => {
        return total + cartItem.product.price * cartItem.quantity;
      }, 0);

      if (salesByDate.has(formattedDate)) {
        salesByDate.set(formattedDate, salesByDate.get(formattedDate)! + total);
      } else {
        salesByDate.set(formattedDate, total);
      }
    });

    const monthlySales = Array.from(salesByDate, ([date, value]) => ({
      date,
      value,
    }));

    return monthlySales;
  }

  private async getLastProducts() {
    const lastProducts = await this.prismaService.cartItem.findMany({
      include: {
        product: true,
        order: true,
      },
      where: {
        order: {
          status: 'PAYED',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });

    return lastProducts;
  }

  private async getOrdersInformation() {
    const totalOrders = await this.prismaService.order.count();

    const activeOrders = await this.prismaService.order.count({
      where: { status: 'PENDING' },
    });

    const completedOrders = await this.prismaService.order.count({
      where: { status: 'PAYED' },
    });

    return { totalOrders, activeOrders, completedOrders };
  }
}
