import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import CreateReviewDto from './dto/create-review.dto';
import { Review } from 'generated/prisma';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('last-three')
  async getLastThree(): Promise<Review[]> {
    return await this.reviewService.getLastThree();
  }

  // TODO: Добавить защиту от неавторизованных пользователей
  @Post(':productId')
  async create(
    @Param('productId') productId: string,
    @Body() dto: CreateReviewDto,
  ) {
    return await this.reviewService.create(productId, dto);
  }

  @Get('/by-product/:productId')
  async getByProduct(@Param('productId') productId: string) {
    return await this.reviewService.getByProduct(productId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.reviewService.delete(id);
  }
}
