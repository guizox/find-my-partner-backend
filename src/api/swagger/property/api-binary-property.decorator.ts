import { ApiProperty } from '@nestjs/swagger';

/** Indicates that the property is a binary string */
export const ApiBinaryProperty = (description: string) =>
  ApiProperty({
    type: 'string',
    required: true,
    description,
    format: 'binary',
  });
