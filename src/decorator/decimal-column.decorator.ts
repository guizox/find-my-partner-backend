import { Column } from 'typeorm';
import { NumericColumnTransformer } from 'src/database/transformer/numeric-column.transformer';

export const DecimalColumn = (name: string, isNullable: boolean = false) =>
  Column('numeric', {
    name,
    nullable: isNullable,
    scale: 2,
    transformer: new NumericColumnTransformer(),
  });
