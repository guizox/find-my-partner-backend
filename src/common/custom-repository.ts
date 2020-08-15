import { CommonEntity } from './common.entity';
import {
  ObjectType,
  FindManyOptions,
  FindOneOptions,
  DeepPartial,
  SelectQueryBuilder,
} from 'typeorm';
import { IEntityManager } from './entity-manager.interface';
import moment from 'moment';

/** A Base Repository class to be used to execute commands in the database */
export abstract class CustomRepository<T extends CommonEntity> {
  /**
   * @param manager The TypeORM EntityManager. It has to be injected
   * with the 'InjectEntityManager' decorator
   * @param entityClass The database entity where the commands will be executed
   */
  constructor(
    protected readonly manager: IEntityManager,
    protected readonly entityClass: ObjectType<T>,
  ) { }

  /**
   * Execute a select operation in a table and returns
   * a collection of results
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
  async find(
    options: FindManyOptions<T>,
    manager: IEntityManager = this.manager,
  ): Promise<T[]> {
    return manager.find<T>(this.entityClass, options);
  }

  /**
   * Execute a select operation in a table and returns
   * the first result found
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
  async findOne(
    options: FindOneOptions<T>,
    manager: IEntityManager = this.manager,
  ): Promise<T> {
    return manager.findOne<T>(this.entityClass, options);
  }

  /**
   * Execute a count operation in a table
   * The where clause only applies to the main entity, for more complex
   * scenarios it will need to use the SelectQueryBuilder
   *
   * @param conditions Where clause to execute to filter the entities result.
   * It will be translated into a WHERE command compatible with the Database
   *
   * @returns The count result
   */
  async count(
    options?: FindOneOptions<T>,
    manager: IEntityManager = this.manager,
  ): Promise<number> {
    return this.manager.count(this.entityClass, options);
  }

  /**
   * Insert a new register into the database
   *
   * @param entity Entity information to create
   * @param userWhoExecutedTheOperation Username of the user who executed the operation.
   * If there is no user it should pass any string that helps to understand the context
   * where the execution was made.
   * @param manager TypeORM EntityManager instance. It should be passed only
   * when the execution should be made in a database transaction context.
   *
   * @returns The inserted entity
   */
  async create(
    entity: DeepPartial<T>,
    userWhoExecutedTheOperation: string,
    manager: IEntityManager = this.manager,
  ): Promise<T> {
    const { id, ...entityWithouId } = entity;
    const _entity = manager.create<T>(
      this.entityClass,
      entityWithouId as DeepPartial<T>,
    );
    _entity.createdBy = userWhoExecutedTheOperation;
    return manager.save<T>(_entity);
  }

  /**
   * Update an entity value
   *
   * @param entityId The entity id to update.
   * @param entity Entity information to update. Should pass only the information that
   * has to be update.
   * @param userWhoExecutedTheOperation Username of the user who executed the operation.
   * If there is no user it should pass any string that helps to understand the context
   * where the execution was made.
   * @param manager TypeORM EntityManager instance. It should be passed only
   * when the execution should be made in a database transaction context.
   */
  async update(
    entityId: number,
    entity: DeepPartial<T>,
    userWhoExecutedTheOperation: string,
    manager: IEntityManager = this.manager,
  ): Promise<void> {
    const _entity = manager.create<T>(this.entityClass, entity);
    _entity.updatedBy = userWhoExecutedTheOperation;
    await manager.update<T>(this.entityClass, entityId, _entity);
  }

  /**
   * Delete a register from database. It should be used with caution
   * because there is no way back and it will trigger the cascade deletion
   * as well.
   *
   * @param entityId The entity id to update.
   * @param manager TypeORM EntityManager instance. It should be passed only
   * when the execution should be made in a database transaction context.
   */
  async delete(
    entityId: number,
    userWhoExecutedTheOperation: string,
    hardDelete: boolean = false,
    manager: IEntityManager = this.manager,
  ): Promise<void> {
    if (hardDelete) {
      await manager.delete<T>(this.entityClass, entityId);
    } else {
      await manager.update(this.entityClass, entityId, {
        deletedAt: moment.utc().toDate(),
        deletedBy: userWhoExecutedTheOperation,
      } as CommonEntity);
    }
  }

  /**
   * Insert into a database a list of entities. It provides a better performance
   * when dealing with multiple inserts.
   *
   * @param entities List of entities to insert
   * @param userWhoExecutedTheOperation Username of the user who executed the operation.
   * If there is no user it should pass any string that helps to understand the context
   * where the execution was made.
   * @param manager TypeORM EntityManager instance. It should be passed only
   * when the execution should be made in a database transaction context.
   */
  async bulkCreate(
    entities: DeepPartial<T>[],
    userWhoExecutedTheOperation: string,
    manager: IEntityManager = this.manager,
  ): Promise<void> {
    const _entities = entities.map(e => {
      const { id, ...entityWithouId } = e;
      const _entity = manager.create<T>(
        this.entityClass,
        entityWithouId as DeepPartial<T>,
      );
      _entity.createdBy = userWhoExecutedTheOperation;
      return _entity;
    });
    await manager.save(_entities);
  }

  /**
   * Open a transaction into the database and execute the callback
   * function passing to it a entity manager with the transaction open
   *
   * It is important to keep the transaction opened for the as little
   * as possible and to get all information data before the execution
   * of this function
   *
   * @param cb The callback function to execute inside the transaction
   * @returns The result of the callback function
   */
  async runInTransaction(
    cb: (entityManager: IEntityManager) => Promise<T | void>,
  ): Promise<T | void> {
    return this.manager.transaction(manager => cb(manager as any));
  }

  /**
   * Create a query builder object to perform complex select operations.
   *
   * It is a safer option to use the 'execute' and 'getCount'
   * actions only
   *
   * From previous options was possible to note that the 'getMany' and 'getOne' actions
   * weren't able to build the result correctly in more complex scenarios.
   *
   * @param alias An alias to reference the table during the query builder creation
   */
  createQueryBuilder(alias: string): SelectQueryBuilder<T> {
    return this.manager.createQueryBuilder(this.entityClass, alias);
  }
}
