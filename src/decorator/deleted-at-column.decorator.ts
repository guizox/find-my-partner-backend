import { UpdateDateColumn } from 'typeorm';
import { CustomEntityMetadata } from 'src/database/entity/custom-entity.metadata';
import { DateTimeColumn } from './date-time-column.decorator';

export const DeletedAtColumn = () =>
  DateTimeColumn(CustomEntityMetadata.deletedAt, true);
