import { StringColumn } from './string-column.decorator';
import { CustomEntityMetadata } from 'src/database/entity/custom-entity.metadata';

export const UpdatedByColumn = () =>
  StringColumn(CustomEntityMetadata.updatedBy, true);
