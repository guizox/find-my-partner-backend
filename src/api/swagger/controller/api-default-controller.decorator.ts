import { applyDecorators } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

export const ApiDefaultController = (...tags: string[]) =>
  applyDecorators(
    ApiTags(...tags),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: 'Unauthorized',
    }),
    ApiForbiddenResponse({
      description: 'Forbidden',
    }),
    ApiBadRequestResponse({
      description: 'Bad request',
    }),
    ApiInternalServerErrorResponse({
      description: 'Internal server error',
    }),
  );
