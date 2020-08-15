import { Column } from 'typeorm';

/** Create an enum column for the property */
export function EnumColumn<T>(
  enumOptions: Record<string, T>,
  name: string,
  isNullable: boolean = false,
  defaultValue?: T,
) {
  return Column('text', {
    name: name,
    nullable: isNullable,
    default: defaultValue,
  });
}
