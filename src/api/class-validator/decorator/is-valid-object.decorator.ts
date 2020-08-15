import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ValidateNested, IsNotEmpty } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';

export const IsValidObject = (type: Function) =>
  applyDecorators(
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
    }),
    ValidateNested(),
    Type(() => type),
  );
