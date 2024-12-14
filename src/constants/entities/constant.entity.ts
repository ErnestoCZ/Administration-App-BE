import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ comment: 'Constants table' })
export class Constant {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
  @Column('varchar', { nullable: false, length: 20 })
  name: string;

  @Column('real', { nullable: false })
  value: number;

  @Column('varchar', { nullable: false, length: 5 })
  currency: string;

  @Column({ nullable: true, length: 100 })
  description: string;
}
