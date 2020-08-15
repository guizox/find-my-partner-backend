import { OneToOne, ObjectType } from 'typeorm';

export function RelationshipOneToOneInverseSide<T>(
  entity: () => ObjectType<T>,
  inverseSide: keyof T,
) {
  return OneToOne(entity, inverseSide as string);
}
