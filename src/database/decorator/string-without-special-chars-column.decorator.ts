import { Column } from 'typeorm';
import { RemoveSpecialCharsColumnTransformer } from 'src/database/transformer/remove-special-chars-column.transformer';

export const StringWithoutSpecialCharsColumn = (
  name: string,
  isNullable: boolean = false,
) =>
  Column('text', {
    name: name,
    nullable: isNullable,
    transformer: new RemoveSpecialCharsColumnTransformer(),
  });
