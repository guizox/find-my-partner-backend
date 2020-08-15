import { Column } from 'typeorm';

export const RelationshipIdColumn = (
  name: string,
  isNullable: boolean = false,
) =>
  Column('integer', {
    name,
    nullable: isNullable,
  });
