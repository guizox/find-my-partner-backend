import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module';
import { PartnerModule } from './modules/partner/partner.module';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    PartnerModule,
    AddressModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
