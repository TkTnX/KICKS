import { Module } from '@nestjs/common';
import { FavoriteItemService } from './favorite-item.service';
import { FavoriteItemController } from './favorite-item.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FavoriteItemController],
  providers: [FavoriteItemService, PrismaService],
})
export class FavoriteItemModule {}
