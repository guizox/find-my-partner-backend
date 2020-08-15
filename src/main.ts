import * as dotenv from 'dotenv'

dotenv.config({
  path: 'devops/local-dev/.env.local-dev',
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwaggerDocumentation } from './api/swagger-documentation';
import { validateConfig } from './modules/config';

async function bootstrap() {
  await validateConfig();
  const app = await NestFactory.create(AppModule);
  setupSwaggerDocumentation(app);
  await app.listen(3000);
}
bootstrap();
