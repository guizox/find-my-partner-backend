import {
  ObjectType,
  FindManyOptions,
  FindOneOptions,
  DeepPartial,
  EntityManager,
  SelectQueryBuilder,
  FindConditions,
} from 'typeorm';

/**
 * A TypeORM EntityManager like interface with on a small
 * subset of functions to help make it possible to create a
 * stub while testing
 *
 * @see {@link https://github.com/typeorm/typeorm/blob/master/docs/working-with-entity-manager.md}
 */
export interface IEntityManager {
  /**
   * Execute a select operation in a table and returns
   * a collection of results
   *
   * @param entityClass Class that represents the table where
   * the query will be executed
   *
   * @param options
   * @param options.select Represents the main entity columns to be selected.
   * It is not possible to apply the select within relation entities.
   *
   * @param options.where Where clause to execute to filter the entities result.
   * It will be translated into a WHERE command compatible with the Database
   *
   * @param options.relations An array of string to left join in the query.
   * The values inside the array have to the property name in the entity
   * that represents the relation. As ['companyAddresses', 'financialRepresentatives']
   *
   * @param options.order A object that represents the result ordenation.
   * The object properties must be the main entity properties and the value
   * should be either 'ASC' or 'DESC' to represents which ordernation
   * will be applied
   *
   * @param options.skip How many lines will be skiped into the result.
   * It should be used in conjunction with the order option
   *
   * @param operation.take How many lines will be returned from the table.
   * It should be used in conjunction the order option
   *
   * @returns An array of entities that pass into the options.where
   */
  find<T>(
    entityClass: ObjectType<T>,
    options?: FindManyOptions<T>,
  ): Promise<T[]>;

  /**
   * Execute a select operation in a table and returns
   * the first result found
   *
   * @param entityClass Class that represents the table where
   * the query will be executed
   *
   * @param options
   * @param options.select Represents the main entity columns to be selected.
   * It is not possible to apply the select within relation entities.
   *
   * @param options.where Where clause to execute to filter the entities result.
   * It will be translated into a WHERE command compatible with the Database
   *
   * @param options.relations An array of string to left join in the query.
   * The values inside the array have to the property name in the entity
   * that represents the relation. As ['companyAddresses', 'financialRepresentatives']
   *
   * @param options.order A object that represents the result ordenation.
   * The object properties must be the main entity properties and the value
   * should be either 'ASC' or 'DESC' to represents which ordernation
   * will be applied
   *
   * @returns The first entity found
   */
  findOne<T>(
    entityClass: ObjectType<T>,
    options?: FindOneOptions<T>,
  ): Promise<T>;

  /**
   * Execute a count operation in a table
   *
   * @param entityClass Class that represents the table where
   * the query will be executed
   * @param conditions Where clause to execute to filter the entities result.
   * It will be translated into a WHERE command compatible with the Database
   *
   * @returns The count result
   */
  count<Entity>(
    entityClass: ObjectType<Entity>,
    conditions?: FindOneOptions<Entity>,
  ): Promise<number>;

  /**
   * It receives a entity like and returns a complete entity.
   * It should be used before any create or update execution
   * @param entityClass The entity that represents the table to execute the action
   * @param entity The entity like object to get as base
   */
  create<T>(entityClass: ObjectType<T>, entity: DeepPartial<T>): T;

  /**
   * Save the entity into the database.
   * If the entity has the id property it will be updated
   * otherwise it will be inserted.
   * But it is not recommended to use this command to update a
   * entity.
   * @param entity The object to be saved
   * @returns The newly created entity
   */
  save<T>(entity: T): Promise<T>;

  /**
   * Update all entities that passes in the criteria with the
   * received values.
   * @target The Class that represents the table to update
   * @param criteria A WHERE criteria to apply before the update.
   * It is important to note that this update can make a bulk update
   * into the database, so it should be used with caution.
   * @param entity The object to be saved. Undefined values will not be updated
   */
  update<T>(target: ObjectType<T>, criteria: any, entity: T): Promise<void>;

  /**
   * Delete all entities that passes in the criteria with the
   * received values.
   * @target The Class that represents the table to update
   * @param criteria A WHERE criteria to apply before the deletion.
   * It is important to note that this update can make a bulk deletion
   * into the database, so it should be used with caution.
   */
  delete<T>(target: ObjectType<T>, criteria: any): Promise<void>;

  /**
   * Open a transaction into the database and execute the callback
   * function passing to it a entity manager with a transaction
   * @param cb The callback function to execute inside the transaction
   * @returns The result of the callback function
   */
  transaction<T>(cb: (entityManager: EntityManager) => Promise<T>): Promise<T>;

  /**
   * Create a query builder object to perform complex select operations
   * @param entityClass The entity that represents the table to execute the action
   * @param alias An alias to reference the table during the query builder creation
   */
  createQueryBuilder<T>(
    entityClass: ObjectType<T>,
    alias: string,
  ): SelectQueryBuilder<T>;
}
