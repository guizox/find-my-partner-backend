import { ApiQuery } from '@nestjs/swagger';

export const ApiItemsPerPageQuery = (required: boolean = true) =>
  ApiQuery({
    name: 'itemsPerPage',
    description: 'Amount of items per page to get',
    type: 'integer',
    required,
    schema: {
      format: 'int32',
      default: 100,
      minimum: 1,
      maximum: 100,
    },
  });
