import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FavoriteItemService {
  constructor(private readonly prismaService: PrismaService) {}

  async addToFavorites(productId: string, userId: string) {}
}
