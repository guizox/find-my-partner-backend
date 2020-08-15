import { ApiParam } from '@nestjs/swagger';

export const ApiEntityIdParam = (name: string, description: string) =>
  ApiParam({
    name,
    description,
    type: 'integer',
    example: 999,
    required: true,
    schema: {
      minimum: 1,
      exclusiveMinimum: true,
      format: 'int32',
    },
  });
