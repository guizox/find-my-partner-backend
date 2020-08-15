import { Query } from '@nestjs/common';

export function DateQuery(
  property: string,
  required: boolean = true,
): ParameterDecorator {
  return Query(property);
}
