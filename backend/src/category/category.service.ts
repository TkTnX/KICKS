import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  create(categoryDto: CategoryDto) {
    const slug = categoryDto.name.split(' ').join('-').toLowerCase();
    return this.prisma.category.create({
      data: { name: categoryDto.name, slug },
    });
  }

  edit(categoryDto: CategoryDto, categoryId: string) {
    const slug = categoryDto.name.split(' ').join('-').toLowerCase();

    return this.prisma.category.update({
      where: { id: categoryId },
      data: {
        name: categoryDto.name,
        slug,
      },
    });
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
