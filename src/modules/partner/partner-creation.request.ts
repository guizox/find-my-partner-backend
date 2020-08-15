import { ApiStringProperty } from "src/api/swagger/property/api-string-property.decorator";
import { IsValidString } from "src/api/class-validator/decorator/is-valid-string.decorator";
import { ApiEmailProperty } from "src/api/swagger/property/api-email-property.decorator";
import { ApiAddressProperty } from 'src/api/swagger/property/api-address-property.decorator';
import { IsValidEmail } from "src/api/class-validator/decorator/is-valid-email.decorator";
import { DefaultStringMaxLength } from "src/database/enum/string-length";
import { Address } from "../address/address.entity";

export class PartnerCreationRequest {
    @ApiStringProperty('partner name')
    @IsValidString()
    name: string;

    @ApiEmailProperty()
    @IsValidEmail()
    email: string;

    @ApiStringProperty('telephone')
    @IsValidString()
    telephone: string;

    @ApiAddressProperty(true)
    address: Address;

}