import { Module } from '@nestjs/common';
import { PartnerController } from './partner.controller';
import { PartnerService } from './partner.service';
import { PartnerRepository } from './partner.repository';
import { AddressRepository } from '../address/address.repository';
import { UserPartnerRepository } from '../user-partner/user-partner.repository';

@Module({
    imports: [],
    controllers: [PartnerController],
    providers: [PartnerService, PartnerRepository, AddressRepository, UserPartnerRepository],
    exports: [PartnerService, PartnerRepository, AddressRepository, UserPartnerRepository]
})
export class PartnerModule { }
