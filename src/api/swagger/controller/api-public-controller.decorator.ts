import { applyDecorators } from '@nestjs/common';
import {
  ApiTags,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

export const ApiPublicController = (...tags: string[]) =>
  applyDecorators(
    ApiTags(...tags),
    ApiBadRequestResponse({
      description: 'Bad request',
    }),
    ApiInternalServerErrorResponse({
      description: 'Internal server error',
    }),
  );
