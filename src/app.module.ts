import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/entities/user.entity';
import { BillingsModule } from './billings/billings.module';
@Module({
  imports: [
    UsersModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '1234',
      database: 'postgres',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      // entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    BillingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
