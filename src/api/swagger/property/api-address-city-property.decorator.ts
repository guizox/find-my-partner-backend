import { ApiStringProperty } from './api-string-property.decorator';

export const ApiAddressCityProperty = (required: boolean = true) =>
  ApiStringProperty('Address city', required, 'São Paulo');
