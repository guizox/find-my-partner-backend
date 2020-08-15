import { Entity } from 'typeorm';

/**
 * Decorator to indicate that a class represents
 * a table. The filename should finish with '.entity.ts' and the class
 * has to extend from the CustomEntity class
 *
 * @param tableName The table name to create in the database.
 * It should be in lowercase, have to be in plural and
 * have to follow the snake_case style. E.g. company_addresses
 */
export const TableEntity = (tableName: string) =>
  Entity({
    name: tableName.toLowerCase(),
  });
