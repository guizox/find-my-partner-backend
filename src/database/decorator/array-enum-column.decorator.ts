import { Column } from 'typeorm';

export const ArrayEnumColumn = (
  enumOptions: Object,
  name: string,
  isNullable: boolean = false,
) =>
  Column('enum', {
    name: name,
    enum: enumOptions,
    nullable: isNullable,
    array: true,
  });
