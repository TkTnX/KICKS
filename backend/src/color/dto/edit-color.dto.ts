import { IsOptional } from 'class-validator';

export class EditColorDto {
  @IsOptional()
  name: string;

  @IsOptional()
  value: string;
}
