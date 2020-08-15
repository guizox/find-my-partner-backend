import { ApiEntityIdProperty } from '../../api/swagger/property/api-entity-id-property.decorator';
import { IdColumn } from '../decorator/id-column.decorator';
import { ApiCreatedAtProperty } from '../../api/swagger/property/api-created-at-property.decorator';
import { CreatedAtColumn } from '../decorator/created-at-column.decorator';
import { ApiCreatedByProperty } from '../../api/swagger/property/api-created-by-property.decorator';
import { CreatedByColumn } from '../decorator/created-by-column.decorator';
import { ApiUpdatedAtProperty } from '../../api/swagger/property/api-updated-at-property.decorator';
import { UpdatedAtColumn } from '../decorator/updated-at-column.decorator';
import { ApiUpdatedByProperty } from '../../api/swagger/property/api-updated-by-property.decorator';
import { UpdatedByColumn } from '../decorator/updated-by-column.decorator';
import { DeletedByColumn } from '../decorator/deleted-by-column.decorator';
import { ApiDeletedAtProperty } from 'src/api/swagger/property/api-deleted-at-property.decorator';
import { ApiDeletedByProperty } from 'src/api/swagger/property/api-deleted-by-property.decorator';
import { DeletedAtColumn } from '../decorator/deleted-at-column.decorator';

/**
 * A Base class containing the default properties to be used by any entity
 * It is import to remember to use the 'TableEntity' decorator
 */
export class CustomEntity {
  @ApiEntityIdProperty()
  @IdColumn()
  id: number;

  @ApiCreatedAtProperty()
  @CreatedAtColumn()
  createdAt: Date;

  @ApiCreatedByProperty()
  @CreatedByColumn()
  createdBy: string;

  @ApiUpdatedAtProperty()
  @UpdatedAtColumn()
  updatedAt?: Date;

  @ApiUpdatedByProperty()
  @UpdatedByColumn()
  updatedBy?: string;

  @ApiDeletedAtProperty()
  @DeletedAtColumn()
  deletedAt?: Date;

  @ApiDeletedByProperty()
  @DeletedByColumn()
  deletedBy?: string;
}
