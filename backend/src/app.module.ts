import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [ProductModule, UserModule, AuthModule, CategoryModule, ReviewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
