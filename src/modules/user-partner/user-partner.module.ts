import { Module } from '@nestjs/common';
import { UserPartnerRepository } from './user-partner.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [UserPartnerRepository],
  exports: [UserPartnerRepository]
})
export class UserPartnerModule { }
