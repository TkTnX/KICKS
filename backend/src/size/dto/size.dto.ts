import { IsNotEmpty, Max, Min } from 'class-validator';

export class SizeDto {
  @IsNotEmpty({ message: 'Size is required' })
  //   @Min(30, { message: 'Minimal size is 30' })
  //   @Max(50, { message: 'Maximum size is 50' })
  size: number;
}
