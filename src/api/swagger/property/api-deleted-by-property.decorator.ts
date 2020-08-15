import { ApiStringProperty } from './api-string-property.decorator';

export const ApiDeletedByProperty = () =>
  ApiStringProperty('Person who deleted the entity', false, 'email@email.com');
