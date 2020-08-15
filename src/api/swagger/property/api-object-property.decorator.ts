import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

export const ApiObjectProperty = (
  type: Type<any>,
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    description,
    type,
    required,
  });
