import { ApiProperty } from '@nestjs/swagger';

export const ApiDateProperty = (
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'string',
    format: 'date',
    required,
    example: '2013-10-16',
    description,
  });
