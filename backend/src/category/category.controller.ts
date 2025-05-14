import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() categoryDto: CategoryDto) {
    return this.categoryService.create(categoryDto);
  }
  @Post(':categoryId')
  edit(
    @Body() categoryDto: CategoryDto,
    @Param('categoryId') categoryId: string,
  ) {
    return this.categoryService.edit(categoryDto, categoryId);
  }

  @Get()
  findAll(@Query('take') take?: number) {
    return this.categoryService.findAll(Number(take));
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.categoryService.findOne(slug);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
