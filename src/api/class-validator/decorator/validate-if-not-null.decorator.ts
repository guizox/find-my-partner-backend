import { applyDecorators } from '@nestjs/common';
import { IsOptional } from 'class-validator';

export const ValidateIfNotNull = (validationDecorator: any) =>
  applyDecorators(IsOptional(), validationDecorator());
