import { User } from 'src/users/entities/user.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string')
  name: string;

  @Column('date')
  dataFrom: string;

  @Column('date')
  dataTo: string;

  @OneToMany(() => User, (user) => user.id, { nullable: true })
  user: User[];
}
