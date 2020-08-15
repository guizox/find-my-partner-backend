import { Column } from 'typeorm';

export const StringColumn = (
  name: string,
  isNullable: boolean = false,
  defaultValue?: string,
) =>
  Column('text', {
    name,
    nullable: isNullable,
    default: defaultValue,
  });
