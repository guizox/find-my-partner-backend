import { ApiProperty } from '@nestjs/swagger';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';

export const ApiUuidProperty = (
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'string',
    required,
    maxLength: DefaultStringMaxLength.RegularString,
    description,
    format: 'uuid',
  });
