import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [UsersController],
  providers: [UsersService, User],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [User, UsersService],
})
export class UsersModule {}
