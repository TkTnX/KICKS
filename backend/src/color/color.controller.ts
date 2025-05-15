import { Controller, Get, Delete, Param, Post, Body, Patch } from '@nestjs/common';
import { ColorService } from './color.service';
import { CreateColorDto } from './dto/create-color.dto';
import { EditColorDto } from './dto/edit-color.dto';

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  async getAll() {
    return this.colorService.getAll();
  }

  @Get(':colorId')
  async getColorById(@Param('colorId') colorId: string) {
    return this.colorService.getColorById(colorId)
    }

  @Post()
  async createColor(@Body() dto: CreateColorDto) {
    return this.colorService.createColor(dto)
  }
  
  @Patch(':colorId')
  async editColor(@Param('colorId') colorId: string, @Body() dto: EditColorDto) {
    return this.colorService.editColor(colorId, dto)
    }

  @Delete(':colorId')
  async deleteColor(@Param("colorId") colorId: string) {
    return this.colorService.deleteColor(colorId)
  }
}
