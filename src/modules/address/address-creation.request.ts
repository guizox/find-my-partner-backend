import { ApiStringProperty } from "src/api/swagger/property/api-string-property.decorator";
import { IsValidString } from "src/api/class-validator/decorator/is-valid-string.decorator";

export class AddressCreationRequest {
    @ApiStringProperty('street')
    @IsValidString()
    street: string;

    @ApiStringProperty('number')
    @IsValidString()
    number: string;

    @ApiStringProperty('neighborhood')
    @IsValidString()
    neighborhood: string;

    @ApiStringProperty('city')
    @IsValidString()
    city: string;

    @ApiStringProperty('state')
    @IsValidString()
    state: string;

    @ApiStringProperty('zipcode')
    @IsValidString()
    zipcode: string;

    @ApiStringProperty('longitude')
    @IsValidString()
    longitude: string;

    @ApiStringProperty('latitude')
    @IsValidString()
    latitude: string;
}