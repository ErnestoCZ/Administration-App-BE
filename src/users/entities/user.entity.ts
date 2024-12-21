import { Billing } from 'src/billings/entities/billing.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';

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

  @ManyToMany(() => Billing)
  @JoinTable()
  billings: Billing[];
}
