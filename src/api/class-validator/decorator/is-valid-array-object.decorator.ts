import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';

export const IsValidArrayObject = (type: Function) =>
  applyDecorators(
    IsArray({ message: ErrorCodesEnum.InvalidValue }),
    ValidateNested({
      each: true,
    }),
    Type(() => type),
  );
