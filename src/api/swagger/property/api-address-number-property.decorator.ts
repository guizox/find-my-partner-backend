import { ApiStringProperty } from './api-string-property.decorator';

export const ApiAddressNumberProperty = (required: boolean = true) =>
  ApiStringProperty('Address number', required, '12399');
