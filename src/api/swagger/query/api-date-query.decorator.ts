import { ApiQuery } from '@nestjs/swagger';

export const ApiDateQuery = (
  name: string,
  description: string,
  required: boolean = true,
) =>
  ApiQuery({
    name,
    type: 'string',
    required,
    example: '2013-10-16',
    description,
    schema: {
      format: 'date',
    },
  });
