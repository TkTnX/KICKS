import { IsHexColor, IsNotEmpty } from 'class-validator';

export class CreateColorDto {

    @IsNotEmpty({message:"Name is required"})
  name: string;

  @IsNotEmpty({ message: ' Value is required' })
  @IsHexColor({ message: 'Value must be HEX code' })
  value: string;
}
