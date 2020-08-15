import { ApiDateTimeProperty } from './api-date-time-property.decorator';

export const ApiDeletedAtProperty = () =>
  ApiDateTimeProperty('Timestamp when the entity was deactivated', false);
