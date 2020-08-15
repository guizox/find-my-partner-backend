import { ApiStringProperty } from './api-string-property.decorator';

export const ApiNaturalPersonIdentityProperty = (required: boolean = true) =>
  ApiStringProperty('Identity number (RG)', required, '11.222.333-4');
