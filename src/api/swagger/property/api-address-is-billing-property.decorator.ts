import { ApiBooleanProperty } from './api-boolean-property.decorator';

export const ApiAddressIsBillingProperty = (required: boolean = true) =>
  ApiBooleanProperty(
    'Information that indicates if the address is a billing address',
    false,
  );
