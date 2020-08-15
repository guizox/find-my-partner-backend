import { Column } from 'typeorm';

export const ArrayStringColumn = (
  name: string,
  isNullable: boolean = false,
  defaultValue?: string,
) =>
  Column('text', {
    name,
    nullable: isNullable,
    default: defaultValue,
    array: true,
  });
