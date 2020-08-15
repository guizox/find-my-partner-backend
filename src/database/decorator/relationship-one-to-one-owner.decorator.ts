import { OneToOne, ObjectType } from 'typeorm';

export function RelationshipOneToOneOwner<T>(
  entity: () => ObjectType<T>,
  nullable: boolean = false,
  inverseSide?: keyof T,
) {
  return OneToOne(entity, inverseSide as string, {
    nullable,
    cascade: ['remove'],
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });
}
