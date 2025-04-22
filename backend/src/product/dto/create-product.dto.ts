import { ArrayMinSize, IsNotEmpty } from 'class-validator';
import { Color, EGender, Size } from 'generated/prisma';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsNotEmpty({ message: 'Price is required' })
  price: number;

  @IsNotEmpty({ message: 'Description is required' })
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
