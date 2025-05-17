import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeDto } from './dto/size.dto';

@Controller('sizes')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Get()
  async getAll() {
    return this.sizeService.getAll();
  }

  @Post()
  async create(@Body() size: SizeDto) {
    return this.sizeService.create(String(size.size));
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.sizeService.delete(id);
  }
}
