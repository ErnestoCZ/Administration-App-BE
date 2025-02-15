import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Billing } from './billing.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class BillingItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Billing, (billing) => billing.billingItem)
  billing: Billing;

  @ManyToOne(() => User, (user) => user.billingItem)
  user: User;
}
