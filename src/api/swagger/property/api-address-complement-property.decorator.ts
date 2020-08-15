import { ApiStringProperty } from './api-string-property.decorator';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';

export const ApiAddressComplementProperty = (required: boolean = true) =>
  ApiStringProperty(
    'Address complement',
    required,
    'Edificio Landmark',
    DefaultStringMaxLength.RegularString,
    0,
  );
