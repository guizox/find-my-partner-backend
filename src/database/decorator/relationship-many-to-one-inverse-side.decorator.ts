import { OneToMany, ObjectType } from 'typeorm';

export function RelationshipManyToOneInverseSide<T>(
  entity: () => ObjectType<T>,
  inverseSide: keyof T,
) {
  return OneToMany(entity, inverseSide as string);
}
