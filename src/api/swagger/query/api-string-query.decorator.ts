import { ApiQuery } from '@nestjs/swagger';

export const ApiStringQuery = (
  name: string,
  description: string,
  required: boolean = true,
) =>
  ApiQuery({
    name,
    description,
    type: 'string',
    required,
  });
