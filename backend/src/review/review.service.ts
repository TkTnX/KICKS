import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import CreateReviewDto from './dto/create-review.dto';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class ReviewService {
  constructor(
    private prisma: PrismaService,
    private productService: ProductService,
  ) {}

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

  async create(productId: string, dto: CreateReviewDto) {
    const product = await this.productService.findById(productId);

    const review = await this.prisma.review.create({
      data: { ...dto, productId: product.id },
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

  async delete(id: string) {
    const review = await this.prisma.review.delete({ where: { id } });

    if (!review) throw new BadRequestException('Failed to delete review');

    return review;
  }
}
