import { ApiStringProperty } from './api-string-property.decorator';

export const ApiAddressStateProperty = (required: boolean = true) =>
  ApiStringProperty('Address state', required, 'SP', 2, 2);
