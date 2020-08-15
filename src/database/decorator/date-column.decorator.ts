import { Column } from 'typeorm';

export const DateColumn = (name: string, isNullable: boolean = false) =>
  Column('date', {
    name,
    nullable: isNullable,
  });
