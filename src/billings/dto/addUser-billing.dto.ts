import { IsUUID } from 'class-validator';

export class AddUserBillingDto {
  @IsUUID()
  userId: string;
  @IsUUID()
  billingId: string;
}
