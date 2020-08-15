import { Column } from 'typeorm';
import { NumericColumnTransformer } from 'src/database/transformer/numeric-column.transformer';

export const MoneyColumn = (
  name: string,
  isNullable: boolean = false,
  defaultValue?: number,
) =>
  Column('numeric', {
    name,
    nullable: isNullable,
    scale: 2,
    default: defaultValue,
    transformer: new NumericColumnTransformer(),
  });
