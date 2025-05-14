import { IsNotEmpty } from 'class-validator';

export class CategoryDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
}
