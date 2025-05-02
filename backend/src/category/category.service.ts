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
      include: { products: { take: 1 } },
      take: take || undefined,
    });
  }

  async findOne(slug: string) {
    return await this.prisma.category.findFirst({
      where: {
        slug,
      },
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
