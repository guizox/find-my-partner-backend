import { ApiStringProperty } from './api-string-property.decorator';

export const ApiAddressProperty = (required: boolean = true) =>
  ApiStringProperty('Address', required, 'Av. das Nações Unidas');
