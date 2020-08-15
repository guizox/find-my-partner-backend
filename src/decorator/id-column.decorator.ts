import { PrimaryGeneratedColumn } from 'typeorm';
import { CustomEntityMetadata } from 'src/database/entity/custom-entity.metadata';

export const IdColumn = () =>
  PrimaryGeneratedColumn('increment', {
    name: CustomEntityMetadata.id,
  });
