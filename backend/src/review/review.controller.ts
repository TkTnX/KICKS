import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import CreateReviewDto from './dto/create-review.dto';
import { ERole, Review } from 'generated/prisma';
import { Authorization } from 'src/auth/decorators/authorization.decorator';

import { Authorized } from 'src/auth/decorators/authorized.decorator';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('all')
  async getAll() {
    return this.reviewService.getAll();
  }
  @Get()
  @Authorization()
  async getAllByUserId(@Authorized('id') userId: string) {
    return this.reviewService.getAllByUserId(userId);
  }

  @Get(':productId')
  async getAllByProductId(@Param('productId') productId: string) {
    return this.reviewService.getAllByProductId(productId);
  }

  @Get('last-three')
  async getLastThree(): Promise<Review[]> {
    return await this.reviewService.getLastThree();
  }

  @Authorization()
  @Post(':productId')
  async create(
    @Param('productId') productId: string,
    @Body() dto: CreateReviewDto,
    @Authorized('id') userId: string,
  ) {
    return await this.reviewService.create(productId, userId, dto);
  }

  @Get('/by-product/:productId')
  async getByProduct(@Param('productId') productId: string) {
    return await this.reviewService.getByProduct(productId);
  }

  @Authorization()
  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @Authorized('id') userId: string,
    @Authorized('role') userRole: ERole,
  ) {
    return await this.reviewService.delete(id, userId, userRole);
  }
}
