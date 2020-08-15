import { ApiObjectProperty } from './api-object-property.decorator';
import { AddressCreationRequest } from 'src/modules/address/address-creation.request';

export const ApiAddressProperty = (required: boolean = true) =>
  ApiObjectProperty(AddressCreationRequest, 'some address', required)
