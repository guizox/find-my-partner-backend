import { ApiStringProperty } from './api-string-property.decorator';

export const ApiUpdatedByProperty = () =>
  ApiStringProperty(
    'Last person who updated the entity',
    false,
    'email@email.com',
  );
