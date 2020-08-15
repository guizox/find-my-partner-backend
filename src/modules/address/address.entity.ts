import { CommonEntity } from 'src/common/common.entity'
import { ApiStringProperty } from 'src/api/swagger/property/api-string-property.decorator'
import { StringColumn } from 'src/decorator/string-column.decorator'
import { TableEntity } from 'src/database/decorator/custom-entity.decorator';
import { AddressMetaData } from './address.metadata';
import { RelationshipManyToOneOwner } from 'src/database/decorator/relationship-many-to-one-owner.decorator';
import { Partner } from '../partner/partner.entity';
import { RelationshipJoinColumn } from 'src/database/decorator/relationship-join-column.decorator';
import { ApiHideProperty } from '@nestjs/swagger';
import { RelationshipIdColumn } from 'src/database/decorator/relationship-id-column.decorator';
import { ApiEntityIdProperty } from 'src/api/swagger/property/api-entity-id-property.decorator';

@TableEntity(AddressMetaData.tableName)
export class Address extends CommonEntity {
    @ApiStringProperty('street', true, 'Jonas Antonio Cadios')
    @StringColumn(AddressMetaData.street)
    street: string;

    @ApiStringProperty('number', true, '120')
    @StringColumn(AddressMetaData.number)
    number: string;

    @ApiStringProperty('neighborhood', true, 'Santa Barbara')
    @StringColumn(AddressMetaData.neighborhood)
    neighborhood: string;

    @ApiStringProperty('city', true, 'Brasilia')
    @StringColumn(AddressMetaData.city)
    city: string;

    @ApiStringProperty('state', true, 'Rio de Janeiro')
    @StringColumn(AddressMetaData.state)
    state: string;

    @ApiStringProperty('zipcode', true, '03010-020')
    @StringColumn(AddressMetaData.zipcode)
    zipcode: string;

    @ApiStringProperty('latitude', true, '47.754098')
    @StringColumn(AddressMetaData.latitude)
    latitude: string;

    @ApiStringProperty('longitude', true, '17.113574')
    @StringColumn(AddressMetaData.longitude)
    longitude: string;

    @ApiHideProperty()
    @RelationshipManyToOneOwner(() => Partner, false, 'id')
    @RelationshipJoinColumn(AddressMetaData.partnerId)
    partner: Partner;

    @ApiEntityIdProperty('The partner id')
    @RelationshipIdColumn(AddressMetaData.partnerId)
    partnerId: number;

}