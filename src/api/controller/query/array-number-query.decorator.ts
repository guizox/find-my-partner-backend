import { Query } from '@nestjs/common';
import { ConvertToArrayPipe } from 'src/api/pipe/convert-to-array.pipe';

export function ArrayNumberQuery(
  property: string,
  required: boolean = true,
): ParameterDecorator {
  return Query(property, new ConvertToArrayPipe<number>());
}
