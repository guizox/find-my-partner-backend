import { ValidateIf } from 'class-validator';
import { applyDecorators } from '@nestjs/common';

export const MakeValidationIf = (
  condition: (object: any, value: any) => boolean,
  ValidationDecorator: any,
) => applyDecorators(ValidateIf(condition), ValidationDecorator());
