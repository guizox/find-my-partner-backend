import { ApiDateTimeProperty } from './api-date-time-property.decorator';

export const ApiUpdatedAtProperty = () =>
  ApiDateTimeProperty(
    'Timestamp with the last time when the entity was updated',
    false,
  );
