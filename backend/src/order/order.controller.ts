import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }
  
  @Authorization()
  @Get()
  async getAll(@Authorized('id') userId: string) {
    return this.orderService.getAll(userId)
  }
}
