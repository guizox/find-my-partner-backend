import { Column } from 'typeorm';

export const DateTimeColumn = (
  name: string,
  isNullable: boolean = false,
  defaultValue?: any,
) =>
  Column('timestamp', {
    name,
    nullable: isNullable,
    default: defaultValue,
  });
