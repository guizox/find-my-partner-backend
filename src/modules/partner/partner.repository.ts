import { CustomRepository } from 'src/common/custom-repository';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { IEntityManager } from 'src/common/entity-manager.interface';
import { Partner } from './partner.entity';

/** User entity repository */
@Injectable()
export class PartnerRepository extends CustomRepository<Partner> {
	constructor(
		@InjectEntityManager()
		manager: IEntityManager,
	) {
		super(manager, Partner);
	}

}
