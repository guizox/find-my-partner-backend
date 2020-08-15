import { ApiProperty } from '@nestjs/swagger';

export const ApiDecimalProperty = (
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'number',
    required,
    example: 122.34,
    description,
  });
