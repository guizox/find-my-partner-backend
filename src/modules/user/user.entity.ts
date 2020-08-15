import { CommonEntity } from 'src/common/common.entity'
import { ApiStringProperty } from 'src/api/swagger/property/api-string-property.decorator'
import { StringColumn } from 'src/decorator/string-column.decorator'
import { TableEntity } from 'src/database/decorator/custom-entity.decorator';
import { UserEntityMetaData } from './user-entity.metadata';
import { ApiEmailProperty } from 'src/api/swagger/property/api-email-property.decorator';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';
import { IsValidString } from 'src/api/class-validator/decorator/is-valid-string.decorator';

@TableEntity(UserEntityMetaData.tableName)
export class User extends CommonEntity {
    @ApiStringProperty('user full name', true, 'Jonas Antonio Cadios')
    @StringColumn(UserEntityMetaData.fullName)
    name: string;

    @ApiEmailProperty(true)
    @StringColumn(UserEntityMetaData.email)
    email: string;

    @ApiStringProperty(
        'New user password',
        true,
        '',
        DefaultStringMaxLength.RegularString,
        8,
        'password',
    )
    @IsValidString(DefaultStringMaxLength.RegularString, 8)
    @StringColumn(UserEntityMetaData.password)
    password: string;

    @ApiStringProperty('user instagram url', true, 'https://instagram.com/user')
    @StringColumn(UserEntityMetaData.instagram)
    instagram: string;

    @ApiStringProperty('user facebook url', true, 'https://facebook.com/user')
    @StringColumn(UserEntityMetaData.facebook)
    facebook: string;

    @ApiStringProperty('user whatsapp number', true, '+ (55) 11 99999-9999')
    @StringColumn(UserEntityMetaData.whatsapp)
    whatsapp: string;

}