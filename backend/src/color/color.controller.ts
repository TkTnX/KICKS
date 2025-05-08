import { Controller, Get } from '@nestjs/common';
import { ColorService } from './color.service';

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  async getAll() {
    return this.colorService.getAll();
  }
}
