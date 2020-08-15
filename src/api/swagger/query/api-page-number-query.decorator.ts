import { ApiQuery } from '@nestjs/swagger';

export const ApiPageNumberQuery = (required: boolean = true) =>
  ApiQuery({
    name: 'pageNumber',
    description: 'Page number',
    type: 'integer',
    required,
    schema: {
      format: 'int32',
      default: 1,
      minimum: 1,
    },
  });
