import { ApiStringProperty } from './api-string-property.decorator';
import { ApiDateTimeProperty } from './api-date-time-property.decorator';

export const ApiCreatedAtProperty = () =>
  ApiDateTimeProperty('Timestamp when the entity was created');
