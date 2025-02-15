import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { BillingItem } from './billingItem.entity';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Column('date', { nullable: false })
  dateFrom: Date;

  @Column('date', { nullable: true })
  dateTo: Date;

  @OneToMany(() => BillingItem, (billingItem) => billingItem.billing)
  billingItem: BillingItem[];
}
