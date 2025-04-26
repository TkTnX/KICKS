import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MaxLength,
} from 'class-validator';

class CreateReviewDto {
  @IsOptional()
  @MaxLength(50, { message: 'Title must be less than 50 characters' })
  title: string;

  @IsOptional()
  @MaxLength(150, { message: 'Text must be less than 150 characters' })
  text: string;

  @IsNotEmpty({ message: 'Rating is required' })
  @IsNumber({}, { message: 'Rating must be a number' })
  @Max(5, { message: 'Rating must be less than 5' })
  @Min(1, { message: 'Rating must be greater than 0' })
  rating: number;

  @IsOptional()
  @IsString({ message: 'Image must be a string' })
  image: string;

  @IsNotEmpty({ message: 'User is required' })
  userId: string;
}

export default CreateReviewDto;
