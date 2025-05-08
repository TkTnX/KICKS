import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/interfaces/roles.interface';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Authorization()
  @Get('/all')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  async getAll() {
    return this.orderService.getAll();
  }

  @Authorization()
  @Get()
  async getAllByUserId(@Authorized('id') userId: string) {
    return this.orderService.getAllByUserId(userId);
  }
}
