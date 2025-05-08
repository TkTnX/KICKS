import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { FavoriteItemModule } from './favorite-item/favorite-item.module';
import { OrderModule } from './order/order.module';
import { SizeModule } from './size/size.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      useFactory: (configSerivce: ConfigService) => ({
        secret: configSerivce.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '7d' },
      }),
      inject: [ConfigService],
    }),
    ProductModule,
    UserModule,
    AuthModule,
    CategoryModule,
    ReviewModule,
    CartModule,
    CartItemModule,
    FavoriteItemModule,
    OrderModule,
    SizeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
