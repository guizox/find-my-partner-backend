import { plainToClass } from 'class-transformer';
import { IsValidString } from 'src/api/class-validator/decorator/is-valid-string.decorator';
import { IsValidPositiveInt } from 'src/api/class-validator/decorator/is-valid-positive-int.decorator';
import { IsValidBoolean } from 'src/api/class-validator/decorator/is-valid-boolean.decorator';
import { IsValidArrayString } from 'src/api/class-validator/decorator/is-valid-array-string.decorator';
import config from 'config';

export class DatabaseConfig {
  @IsValidString()
  type: string;

  @IsValidString()
  host: string;

  @IsValidPositiveInt()
  port: number;

  @IsValidString()
  database: string;

  @IsValidBoolean()
  synchronize: boolean;

  @IsValidString()
  username: string;

  @IsValidString()
  password: string;

  @IsValidBoolean()
  logging: boolean;

  @IsValidString()
  logger: string;

  @IsValidArrayString()
  entities: string[];
}

const _dbConfig = config.get<DatabaseConfig>('database');
console.log(_dbConfig)
const entities = [__dirname + '/../**/*.entity.{js,ts}'];
const logger = 'advanced-console';

export const databaseConfig = plainToClass(DatabaseConfig, {
  ..._dbConfig,
  entities,
  logger,
});
