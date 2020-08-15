import { ApiStringProperty } from './api-string-property.decorator';

export const ApiCreatedByProperty = () =>
  ApiStringProperty('Person who created the entity', true, 'email@email.com');
