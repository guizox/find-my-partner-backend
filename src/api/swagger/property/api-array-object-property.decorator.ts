import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

export const ApiArrayObjectProperty = (
  type: Type<any>,
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    description,
    type,
    required,
    isArray: true,
  });
