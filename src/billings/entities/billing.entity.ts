import { User } from 'src/users/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @OneToMany(() => User, (user) => user.id, { nullable: true })
  user: User[];
}
