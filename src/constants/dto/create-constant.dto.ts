import { IsNumber, IsOptional, IsString, IsEnum } from 'class-validator';
enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}
export class CreateConstantDto {
  @IsString()
  name: string;

  @IsNumber()
  value: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsOptional()
  @IsString()
  description: string;
}
