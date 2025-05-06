import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/interfaces/roles.interface';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Query() params: Record<string, string>) {
    return this.productService.findAll(params);
  }

  @Get('by-category')
  findByCategory(@Query('categories') categories: string) {
    const catsArray = categories.split(',');
    return this.productService.findByCategory(catsArray);
  }
  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Get('pages')
  countPages(@Query('limit') limit: number) {
    return this.productService.countPages(limit);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
