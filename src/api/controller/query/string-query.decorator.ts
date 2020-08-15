import { Query } from '@nestjs/common';

export function StringQuery(
  property: string,
  required: boolean = true,
): ParameterDecorator {
  return Query(property);
}
