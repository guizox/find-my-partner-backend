import { Column } from 'typeorm';

/** Create an int column for the property */
export const IntColumn = (
  name: string,
  isNullable: boolean = false,
  defaultValue?: number,
) =>
  Column('integer', {
    name: name,
    nullable: isNullable,
    default: defaultValue,
  });
