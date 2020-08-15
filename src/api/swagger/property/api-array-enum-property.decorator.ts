import { ApiProperty } from '@nestjs/swagger';

export const ApiArrayEnumProperty = (
  enumOptions: Record<string, any>,
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'string',
    enum: enumOptions,
    isArray: true,
    required,
    description,
  });
