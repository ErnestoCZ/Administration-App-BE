import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
@Module({
  controllers: [UsersController],
  providers: [UsersService, User],
  exports: [User],
})
export class UsersModule {}
