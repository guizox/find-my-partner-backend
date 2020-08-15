import { UpdateDateColumn } from 'typeorm';
import { CustomEntityMetadata } from 'src/database/entity/custom-entity.metadata';

export const UpdatedAtColumn = () =>
  UpdateDateColumn({
    name: CustomEntityMetadata.updatedAt,
    nullable: true,
  });
