import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { EGender, Prisma } from 'generated/prisma';
import { getOrderBy } from './helpers/getOrderBy';
import { getWhere } from './helpers/getWhere';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({
      data: {
        ...createProductDto,
        colors: {
          connect: createProductDto.colors.map((color) => ({
            id: color,
          })),
        },
        sizes: {
          connect: createProductDto.sizes.map((size) => ({
            id: size,
          })),
        },
      },
    });
  }
  async findAll(params: Record<string, string>) {
    const orderBy = getOrderBy(params.sortBy);
    const where: Prisma.ProductWhereInput = getWhere(params);

    if (params.category) {
      where.category = {
        slug: params.category,
      };
    }

    const products = await this.prisma.product.findMany({
      orderBy,
      take: +params.take || undefined,
      skip: +params.skip || undefined,

      where,
      include: {
        sizes: true,
        colors: true,
      },
    });

    return products;
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    const product = await this.prisma.product.update({
      where: { id },
      data: {
        ...updateProductDto,
        colors: {
          connect: updateProductDto?.colors?.map((color) => ({
            id: color,
          })),
        },
        sizes: {
          connect: updateProductDto?.sizes?.map((size) => ({
            id: size,
          })),
        },
      },
    });

    return product;
  }

  async delete(id: string) {
    await this.findOne(id);
    return await this.prisma.product.delete({ where: { id } });
  }
}
