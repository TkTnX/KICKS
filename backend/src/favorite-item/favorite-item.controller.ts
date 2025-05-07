import { Controller, Get, Param, Post } from '@nestjs/common';
import { FavoriteItemService } from './favorite-item.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';

@Controller('favoriteItems')
export class FavoriteItemController {
  constructor(private readonly favoriteItemService: FavoriteItemService) {}

  @Authorization()
  @Post(':productId')
  async addToFavorites(
    @Param('productId') productId: string,
    @Authorized('id') userId: string,
  ) {
    return this.favoriteItemService.addToFavorites(productId, userId)
  }

  @Authorization()
  @Get()
  async getAll(@Authorized('id') userId: string) {
    return this.favoriteItemService.getAll(userId)
  }
}
