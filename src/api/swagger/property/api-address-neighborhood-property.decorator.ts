import { ApiStringProperty } from './api-string-property.decorator';

export const ApiAddressNeighborhoodProperty = (required: boolean = true) =>
  ApiStringProperty('Address neighborhood', required, 'Brooklin Novo');
