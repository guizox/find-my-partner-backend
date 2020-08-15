import { ApiProperty } from '@nestjs/swagger';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';

/** Indicates that the property is a string */
export const ApiStringProperty = (
  description: string,
  required: boolean = true,
  example?: string,
  maxLength:
    | DefaultStringMaxLength
    | number = DefaultStringMaxLength.RegularString,
  minLength: number = 1,
  format?: string,
) =>
  ApiProperty({
    type: 'string',
    required,
    example,
    minLength,
    maxLength,
    description,
    format,
  });
