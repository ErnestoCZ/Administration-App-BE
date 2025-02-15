import { BillingItem } from 'src/billings/entities/billingItem.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @OneToMany(() => BillingItem, (billingItem) => billingItem.user)
  billingItem: BillingItem[];
}
