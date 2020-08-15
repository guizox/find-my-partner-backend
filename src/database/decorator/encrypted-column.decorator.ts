import { Column } from 'typeorm';
import { EncryptColumnTransformer } from '../transformer/encrypt-column.transformer';

export const EcryptedColumn = (name: string, isNullable: boolean = false) =>
  Column('text', {
    name: name,
    nullable: isNullable,
    transformer: new EncryptColumnTransformer(),
  });
