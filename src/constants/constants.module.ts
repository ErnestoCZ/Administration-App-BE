import { Module } from '@nestjs/common';
import { ConstantsService } from './constants.service';
import { ConstantsController } from './constants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Constant } from './entities/constant.entity';

@Module({
  controllers: [ConstantsController],
  providers: [ConstantsService, Constant],
  imports: [TypeOrmModule.forFeature([Constant])],
  exports: [Constant],
})
export class ConstantsModule {}
