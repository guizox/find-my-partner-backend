import { CreateDateColumn } from 'typeorm';
import { CustomEntityMetadata } from 'src/database/entity/custom-entity.metadata';

export const CreatedAtColumn = () =>
  CreateDateColumn({
    name: CustomEntityMetadata.createdAt,
    nullable: false,
  });
