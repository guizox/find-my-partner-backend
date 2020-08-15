import { ApiProperty } from '@nestjs/swagger';

export const ApiDateTimeProperty = (
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'string',
    format: 'date-time',
    required,
    example: '2017-07-21T17:32:28Z',
    description,
  });
