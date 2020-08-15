import { ApiStringProperty } from "src/api/swagger/property/api-string-property.decorator";
import { IsValidString } from "src/api/class-validator/decorator/is-valid-string.decorator";
import { ApiEmailProperty } from "src/api/swagger/property/api-email-property.decorator";
import { IsValidEmail } from "src/api/class-validator/decorator/is-valid-email.decorator";
import { ApiPhoneNumberProperty } from "src/api/swagger/property/api-phone-number.property.decorator";
import { IsValidPhoneNumber } from "src/api/class-validator/decorator/is-valid-phone-number.decorator";
import { DefaultStringMaxLength } from "src/database/enum/string-length";

export class UserCreationRequest {
    @ApiStringProperty('user full name')
    @IsValidString()
    name: string;

    @ApiEmailProperty()
    @IsValidEmail()
    email: string;

    @ApiStringProperty(
        'Password that will be used to login',
        true,
        '',
        DefaultStringMaxLength.RegularString,
        8,
        'password',
    )
    @IsValidString(DefaultStringMaxLength.RegularString, 8)
    password: string;

    @ApiStringProperty('user instagram')
    @IsValidString()
    instagram: string;

    @ApiStringProperty('user facebook')
    @IsValidString()
    facebook: string;


    @ApiPhoneNumberProperty('User whatsapp number')
    @IsValidPhoneNumber()
    whatsapp: string;

}