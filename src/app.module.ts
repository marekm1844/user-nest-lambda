import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/mysql.config';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(
      {
        //inject: [ConfigModule],
        useClass: TypeOrmConfigService,
      }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
