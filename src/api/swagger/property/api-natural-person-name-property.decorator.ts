import { ApiStringProperty } from './api-string-property.decorator';

export const ApiNaturalPersonNameProperty = (required: boolean = true) =>
  ApiStringProperty('Person full name', required, 'João Alves');
