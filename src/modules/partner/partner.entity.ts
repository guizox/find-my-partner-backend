import { CommonEntity } from 'src/common/common.entity'
import { ApiStringProperty } from 'src/api/swagger/property/api-string-property.decorator'
import { StringColumn } from 'src/decorator/string-column.decorator'
import { TableEntity } from 'src/database/decorator/custom-entity.decorator';
import { PartnerMetaData } from './partner.metadata';
import { ApiEmailProperty } from 'src/api/swagger/property/api-email-property.decorator';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';
import { IsValidString } from 'src/api/class-validator/decorator/is-valid-string.decorator';
import { RelationshipOneToOneInverseSide } from 'src/database/decorator/relationship-one-to-one-inverse-side.decorator';

import { Address } from '../address/address.entity';
import { UserPartnerEntity } from '../user-partner/user-partner.entity';

@TableEntity(PartnerMetaData.tableName)
export class Partner extends CommonEntity {
    @ApiStringProperty('partner full name', true, 'Jonas Antonio Cadios')
    @StringColumn(PartnerMetaData.fullName)
    name: string;

    @ApiEmailProperty(true)
    @StringColumn(PartnerMetaData.email)
    email: string;

    @ApiStringProperty('partner telephone', true, '+(55) 11 99999-9999')
    @StringColumn(PartnerMetaData.telephone)
    telephone: string;

    @RelationshipOneToOneInverseSide(() => Address, 'id')
    address: Address;

    @RelationshipOneToOneInverseSide(() => UserPartnerEntity, 'id')
    userPartner: UserPartnerEntity;
}