import { ApiQuery } from '@nestjs/swagger';

export const ApiNumberQuery = (
  name: string,
  description: string,
  required: boolean = true,
) =>
  ApiQuery({
    name,
    description,
    type: 'integer',
    example: 999,
    required,
    schema: {
      format: 'int32',
    },
  });
