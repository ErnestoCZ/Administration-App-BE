import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateConstantDto {
  @IsString()
  name: string;

  @IsNumber()
  value: number;

  @IsString()
  currency: string;

  @IsOptional()
  @IsString()
  description: string;
}
