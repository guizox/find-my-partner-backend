import { JoinColumn } from 'typeorm';

export const RelationshipJoinColumn = (name: string) =>
  JoinColumn({
    name,
  });
