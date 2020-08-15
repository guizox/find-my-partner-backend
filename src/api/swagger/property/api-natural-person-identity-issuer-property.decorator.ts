import { ApiStringProperty } from './api-string-property.decorator';

export const ApiNaturalPersonIdentityIssuerProperty = (
  required: boolean = true,
) => ApiStringProperty('Identity issuer (Orgão expedidor)', required, 'SSP');
