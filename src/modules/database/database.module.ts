import { Module, Global } from '@nestjs/common';
import { databaseConfig } from 'src/database/database.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../user/user.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig as TypeOrmModuleOptions),
    TypeOrmModule.forFeature([
      User
    ]),
  ],
  providers: [
  ],
  exports: [
  ],
})
export class DatabaseModule { }
