import { Column } from 'typeorm';

export const TextColumn = (name: string, isNullable: boolean = false) =>
  Column('text', {
    name,
    nullable: isNullable,
  });
