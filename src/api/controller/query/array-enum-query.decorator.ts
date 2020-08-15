import { Query } from '@nestjs/common';
import { ConvertToArrayPipe } from 'src/api/pipe/convert-to-array.pipe';

export function ArrayEnumQuery<T>(
  enumOptions: Record<string, T>,
  property: string,
  required: boolean = true,
) {
  return Query(property, new ConvertToArrayPipe<T>());
}
