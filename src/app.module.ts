import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/entities/user.entity';
import { BillingsModule } from './billings/billings.module';
import { ConfigModule } from '@nestjs/config';
import { ConstantsModule } from './constants/constants.module';
import configuration from '../config/configuration';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '1234',
      database: 'postgres',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BillingsModule,
    ConstantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
