import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateBillingDto {
  @IsString()
  name: string;

  @IsDateString()
  dateFrom: Date;

  @IsOptional()
  @IsDateString()
  dateTo: Date;
}
