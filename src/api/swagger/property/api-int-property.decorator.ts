import { ApiProperty } from '@nestjs/swagger';

/** Indicates that the property is an Int value */
export const ApiIntProperty = (
  description: string,
  required: boolean = true,
  example?: number,
  minimum?: number,
) =>
  ApiProperty({
    type: 'integer',
    format: 'int32',
    required,
    minimum,
    exclusiveMinimum: false,
    example,
    description,
  });
