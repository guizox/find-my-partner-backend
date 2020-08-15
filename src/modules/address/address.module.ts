import { Module } from '@nestjs/common';
import { AddressRepository } from './address.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [AddressRepository],
  exports: [AddressRepository]
})
export class AddressModule { }
