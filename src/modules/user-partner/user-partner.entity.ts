import { CommonEntity } from 'src/common/common.entity'
import { TableEntity } from 'src/database/decorator/custom-entity.decorator';
import { UserPartnerMetaData } from './user-partner.metadata';
import { RelationshipManyToOneOwner } from 'src/database/decorator/relationship-many-to-one-owner.decorator';
import { Partner } from '../partner/partner.entity';
import { RelationshipJoinColumn } from 'src/database/decorator/relationship-join-column.decorator';
import { RelationshipIdColumn } from 'src/database/decorator/relationship-id-column.decorator';
import { ApiEntityIdProperty } from 'src/api/swagger/property/api-entity-id-property.decorator';
import { User } from '../user/user.entity';
import { ApiHideProperty } from '@nestjs/swagger';

@TableEntity(UserPartnerMetaData.tableName)
export class UserPartnerEntity extends CommonEntity {

    @ApiHideProperty()
    @RelationshipManyToOneOwner(() => User, false, 'id')
    @RelationshipJoinColumn(UserPartnerMetaData.userId)
    user: User;

    @ApiEntityIdProperty('The user id')
    @RelationshipIdColumn(UserPartnerMetaData.userId)
    userId: number;

    @ApiHideProperty()
    @RelationshipManyToOneOwner(() => Partner, false, 'id')
    @RelationshipJoinColumn(UserPartnerMetaData.partnerId)
    partner: Partner;

    @ApiEntityIdProperty('The partner id')
    @RelationshipIdColumn(UserPartnerMetaData.partnerId)
    partnerId: number;
}