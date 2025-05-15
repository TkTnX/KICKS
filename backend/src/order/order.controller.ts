import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/interfaces/roles.interface';
import { OrderDto } from './dto/order.dto';
import { PaymentStatusDto } from './dto/payment-status.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Authorization()
  @Get('/all')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  async getAll(@Query('limit') limit?: string) {
    return this.orderService.getAll(limit);
  }

  @Get(':orderId')
  async getOneById(@Param('orderId') orderId: string) {
    return this.orderService.getOrderById(orderId);
  }

  @Authorization()
  @Get()
  async getAllByUserId(@Authorized('id') userId: string) {
    return this.orderService.getAllByUserId(userId);
  }

  @HttpCode(200)
  @Post('place')
  @Authorization()
  async checkout(@Body() dto: OrderDto, @Authorized('id') userId: string) {
    return this.orderService.createPayment(dto, userId);
  }

  @HttpCode(200)
  @Post('status')
  async updateStatus(@Body() dto: PaymentStatusDto) {
    return this.orderService.updateStatus(dto);
  }

  @Authorization()
  @Delete(':orderId')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  async deleteOrder(@Param('orderId') orderId: string) {
    return this.orderService.deleteOrder(orderId);
  }
}
