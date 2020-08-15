import { ApiQuery } from '@nestjs/swagger';

export const ApiArrayNumberQuery = (
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
    isArray: true,
    schema: {
      format: 'int32',
    },
  });
