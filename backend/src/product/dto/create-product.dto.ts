import { ArrayMinSize, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { EGender } from 'generated/prisma';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'Price is required' })
  @IsInt({ message: 'Price must be an integer' })
  price: number;

  @IsNotEmpty({ message: 'Description is required' })
  @IsString({ message: 'Description must be a string' })
  description: string;

  gender?: EGender;

  @ArrayMinSize(1, { message: 'At least one image is required' })
  images: string[];

  @IsNotEmpty({ message: 'Category is required' })
  categoryId: string;

  @IsNotEmpty({ message: 'At least one color is required' })
  @ArrayMinSize(1, { message: 'At least one color is required' })
  colors: string[];

  @IsNotEmpty({ message: 'At least one size is required' })
  @ArrayMinSize(1, { message: 'At least one size is required' })
  sizes: string[];
}
