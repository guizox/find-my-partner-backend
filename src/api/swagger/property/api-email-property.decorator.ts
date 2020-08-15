import { ApiStringProperty } from './api-string-property.decorator';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';

export const ApiEmailProperty = (required: boolean = true) =>
  ApiStringProperty(
    'Email',
    required,
    'email@email.com',
    DefaultStringMaxLength.RegularString,
    1,
    'email',
  );
