import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
