import { CustomRepository } from 'src/common/custom-repository';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { IEntityManager } from 'src/common/entity-manager.interface';
import { User } from './user.entity';

/** User entity repository */
@Injectable()
export class UserRepository extends CustomRepository<User> {
    constructor(
        @InjectEntityManager()
        manager: IEntityManager,
    ) {
        super(manager, User);
    }

}
