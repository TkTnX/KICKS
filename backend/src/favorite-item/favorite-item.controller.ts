import { Controller, Param, Post } from '@nestjs/common';
import { FavoriteItemService } from './favorite-item.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';

@Controller('favorite-item')
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
}
