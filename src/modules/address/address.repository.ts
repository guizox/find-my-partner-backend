import { CustomRepository } from 'src/common/custom-repository';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { IEntityManager } from 'src/common/entity-manager.interface';
import { Address } from './address.entity';

/** Address entity repository */
@Injectable()
export class AddressRepository extends CustomRepository<Address> {
    constructor(
        @InjectEntityManager()
        manager: IEntityManager,
    ) {
        super(manager, Address);
    }

}
