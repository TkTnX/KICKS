import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

// TODO: Добавить аутентификацию
// TODO: gurds для защиты роутов

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
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

  findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
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
  }

  delete(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
