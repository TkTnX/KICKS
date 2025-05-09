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
    // TODO: Сделать добавление изображений
    const images = ['null'];
    return await this.prisma.product.create({
      data: {
        ...createProductDto,
        images,
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
        category: true,
      },
    });

    if (!products) throw new NotFoundException('Products are not found');

    return products;
  }

  async findByCategory(categories: string[]) {
    const products = await this.prisma.product.findMany({
      where: {
        category: {
          slug: {
            in: categories,
          },
        },
      },
    });

    if (!products) throw new NotFoundException('Products are not found');

    return products;
  }
  async findById(id: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        sizes: true,
        colors: true,
        category: true,
      },
    });

    if (!product) throw new NotFoundException('Product is not found');

    return product;
  }

  async countPages(limit: number) {
    const totalProducts = await this.prisma.product.count();

    return Math.ceil(totalProducts / limit);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.findById(id);

    const addedImages = null;
    const newProduct = await this.prisma.product.update({
      where: { id },
      data: {
        ...updateProductDto,
        categoryId: updateProductDto.categoryId || product.categoryId,
        images: addedImages || product.images,
        colors: {
          connect:
            updateProductDto.colors?.map((id) => ({ id })) ||
            product.colors.map((color) => ({ id: color.id })),
        },
        sizes: {
          connect:
            updateProductDto.sizes?.map((id) => ({ id })) ||
            product.sizes.map((size) => ({ id: size.id })),
        },
      },
    });

    return newProduct;
  }

  async delete(id: string) {
    await this.findById(id);
    return await this.prisma.product.delete({ where: { id } });
  }
}
