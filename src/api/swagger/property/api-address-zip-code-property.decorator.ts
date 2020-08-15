import { ApiStringProperty } from './api-string-property.decorator';

export const ApiAddressZipCodeProperty = (required: boolean = true) =>
  ApiStringProperty('Address zipcode', required, '04578-000', 8, 8, '0000-000');
