import { ApiProperty } from '@nestjs/swagger';

/** Indicates that the property is a enum */
export const ApiEnumProperty = (
  enumOptions: Record<string, any>,
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'string',
    enum: enumOptions,
    required,
    description,
  });
