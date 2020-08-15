import { CustomRepository } from 'src/common/custom-repository';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { IEntityManager } from 'src/common/entity-manager.interface';
import { UserPartnerEntity } from './user-partner.entity';

/** Address entity repository */
@Injectable()
export class UserPartnerRepository extends CustomRepository<UserPartnerEntity> {
    constructor(
        @InjectEntityManager()
        manager: IEntityManager,
    ) {
        super(manager, UserPartnerEntity);
    }

}
