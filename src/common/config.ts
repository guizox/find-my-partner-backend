
import { databaseConfig } from 'src/database/database.config';
import { validate } from 'class-validator';

export async function validateConfig() {
  const configs = [
    databaseConfig,
  ];

  for (const config of configs) {
    const errors = await validate(config);
    if (errors.length > 0) {
      throw new Error('Invalid config');
    }
  }
}
