import { ManyToOne, ObjectType } from 'typeorm';

export function RelationshipManyToOneOwner<T>(
  entity: () => ObjectType<T>,
  nullable: boolean = false,
  inverseSide?: keyof T,
) {
  return ManyToOne(entity, inverseSide as string, {
    nullable,
    cascade: ['remove'],
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });
}
