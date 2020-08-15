import { ApiStringProperty } from './api-string-property.decorator';

// [TODO] Create max length validation
export const ApiPhoneNumberProperty = (
  description: string,
  required: boolean = true,
) => ApiStringProperty(description, required, '+55 (11) 91111-0000');
