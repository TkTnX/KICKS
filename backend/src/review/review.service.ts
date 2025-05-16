import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import CreateReviewDto from './dto/create-review.dto';
import { ProductService } from 'src/product/product.service';
import { ERole } from 'generated/prisma';

@Injectable()
export class ReviewService {
  constructor(
    private prisma: PrismaService,
    private productService: ProductService,
  ) {}

  private async getOneById(id: string) {
    const review = await this.prisma.review.findFirst({ where: { id } });
    if (!review) throw new NotFoundException('Review is not found!');
    return review;
  }

  async getAll() {
    const reviews = await this.prisma.review.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });

    return reviews;
  }
  async getAllByUserId(userId: string) {
    const reviews = await this.prisma.review.findMany({
      where: { userId },
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });

    return reviews;
  }
  async getAllByProductId(productId: string) {
    const reviews = await this.prisma.review.findMany({
      where: { productId },
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });

    return reviews;
  }
  async getLastThree() {
    const reviews = await this.prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
      },
      take: 3,
    });

    return reviews;
  }

  async create(productId: string, userId: string, dto: CreateReviewDto) {
    const product = await this.productService.findById(productId);
    console.log(dto);
    const review = await this.prisma.review.create({
      data: { ...dto, userId, productId: product.id },
    });

    if (!review) throw new BadRequestException('Failed to create review');

    return review;
  }

  async getByProduct(productId: string) {
    const product = await this.productService.findById(productId);

    const reviews = await this.prisma.review.findMany({
      where: { productId: product.id },
      orderBy: { createdAt: 'desc' },
    });

    return reviews;
  }

  async delete(id: string, userId: string, userRole: ERole) {
    const review = await this.getOneById(id);

    if (review.userId !== userId && userRole !== ERole.ADMIN)
      throw new BadGatewayException("It isn't your review!");
    const deleted = await this.prisma.review.delete({ where: { id } });

    if (!deleted) throw new BadRequestException('Failed to delete review');

    return deleted;
  }
}
