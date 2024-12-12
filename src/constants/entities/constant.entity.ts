import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

type currency = 'euro' | 'dollar';

@Entity({ comment: 'Constants table' })
export class Constant {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { nullable: false, length: 20 })
  name: string;

  @Column('real', { nullable: false })
  value: string;

  @Column('date', { nullable: false })
  validTo: Date;

  @Column('varchar', { nullable: false, length: 10 })
  currency: currency;

  @Column({ nullable: true, length: 100 })
  description: string;
}
