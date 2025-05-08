import { Controller, Get } from '@nestjs/common';
import { SizeService } from './size.service';

@Controller('sizes')
export class SizeController {
  constructor(private readonly sizeService: SizeService) { }
  
  @Get()
  async getAll() {
    return this.sizeService.getAll()
  }
}
