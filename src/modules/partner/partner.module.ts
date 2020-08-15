import { Module } from '@nestjs/common';
import { PartnerController } from './partner.controller';
import { PartnerService } from './partner.service';
import { PartnerRepository } from './partner.repository';
import { AddressRepository } from '../address/address.repository';

@Module({
    imports: [],
    controllers: [PartnerController],
    providers: [PartnerService, PartnerRepository, AddressRepository],
    exports: [PartnerService, PartnerRepository]
})
export class PartnerModule { }
