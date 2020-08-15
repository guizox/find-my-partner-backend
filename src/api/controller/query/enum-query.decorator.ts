import { Query } from '@nestjs/common';

export function EnumQuery<T>(
  enumOptions: Record<string, T>,
  property: string,
  required: boolean = true,
): ParameterDecorator {
  return Query(property);
}
