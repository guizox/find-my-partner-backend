import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module';
import { PartnerModule } from './modules/partner/partner.module';
import { AddressModule } from './modules/address/address.module';
import { UserPartnerModule } from './modules/user-partner/user-partner.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    PartnerModule,
    AddressModule,
    UserPartnerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
