import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

// TODO: Добавить аутентификацию
// TODO: gurds для защиты роутов
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

  findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    const product = await this.prisma.product.update({
      where: { id: id },
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
