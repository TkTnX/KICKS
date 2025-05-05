import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class FavoriteItemService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly productService: ProductService,
  ) {}

  async addToFavorites(productId: string, userId: string) {
    const product = await this.productService.findById(productId);

    const isExists = await this.prismaService.favoriteItem.findFirst({
      where: {
        productId: product.id,
        userId,
      },
    });

    if (isExists) {
      return await this.prismaService.favoriteItem.delete({
        where: {
          id: isExists.id,
        },
      });
    }
    return await this.prismaService.favoriteItem.create({
      data: {
        productId: product.id,
        userId,
      },
    });
  }
}
