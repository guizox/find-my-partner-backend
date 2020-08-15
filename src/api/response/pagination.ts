import { ApiProperty } from '@nestjs/swagger';
import { ApiIntProperty } from '../swagger/property/api-int-property.decorator';

/**
 * Base pagination class. It should be extended and
 * the documentation for the items must be provided.
 */
export abstract class PaginatedResponse<T> {
  @ApiIntProperty('The result page number')
  pageNumber: number;

  @ApiIntProperty('The required amount of items per page')
  itemsPerPage: number;

  @ApiIntProperty('The amount of pages available')
  numberOfPages: number;

  @ApiIntProperty(
    `The amount of items in this page.
    Usually in the last page this number will be smaller than the 'itemsPerPage' property`,
  )
  itemsCount: number;

  // Always decorate this porperty with
  // ApiArrayObjectProperty decorator
  abstract items: T[];
}

export class PaginatedRequest {
  @ApiProperty({
    required: false,
  })
  itemsPerPage: number;

  @ApiProperty({
    required: false,
  })
  pageNumber: number;
}
