import { applyDecorators } from '@nestjs/common';
import { IsValidString } from './is-valid-string.decorator';
import { Transform } from 'class-transformer';
import { removeSpecialChars } from 'src/common/remove-special-chars';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';

export const ValidateStringAndRemoveSpecialChars = (
  maxLength: number = DefaultStringMaxLength.RegularString,
  minLength: number = 0,
) =>
  applyDecorators(
    IsValidString(maxLength, minLength),
    Transform(value => removeSpecialChars(value)),
  );
