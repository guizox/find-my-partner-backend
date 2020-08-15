import { Column } from 'typeorm';

export const BooleanColumn = (
  name: string,
  isNullable: boolean = false,
  defaultValue?: boolean,
) =>
  Column('boolean', {
    name,
    nullable: isNullable,
    default: defaultValue,
  });
