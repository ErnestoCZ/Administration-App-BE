import { Module } from '@nestjs/common';
import { BillingsService } from './billings.service';
import { BillingsController } from './billings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billing } from './entities/billing.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [BillingsController],
  providers: [BillingsService, Billing],
  imports: [TypeOrmModule.forFeature([Billing]), UsersModule],
  exports: [Billing],
})
export class BillingsModule {}
