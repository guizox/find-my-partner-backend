import { Column } from 'typeorm';

export const UuidColumn = (name: string, isNullable: boolean = false) =>
  Column('uuid', {
    name,
    nullable: isNullable,
  });
