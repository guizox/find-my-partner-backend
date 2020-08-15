import { Query } from '@nestjs/common';
import { ConvertToNumberPipe } from 'src/api/pipe/convert-to-number.pipe';

export function NumberQuery(
  property: string,
  required: boolean = true,
): ParameterDecorator {
  return Query(property, new ConvertToNumberPipe(property, required));
}
