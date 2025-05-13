import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryDto });
  }

  async findAll(take?: number) {
    return await this.prisma.category.findMany({
      include: {
        products: { take: 1 },
        _count: { select: { products: true } },
      },
      take: take || undefined,
    });
  }

  async findOne(slug: string) {
    return await this.prisma.category.findFirst({
      where: {
        slug,
      },
      include: {
        products: true,
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
  }

  async deleteCategory(id: string) {
    return await this.prisma.category.delete({ where: { id } });
  }
}
