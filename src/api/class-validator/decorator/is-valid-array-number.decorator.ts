import { IsArray, IsNotEmpty, IsInt } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';
import { applyDecorators } from '@nestjs/common';

export const IsValidArrayInt = () =>
  applyDecorators(
    IsArray({
      message: ErrorCodesEnum.InvalidValue,
    }),
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
      each: true,
    }),
    IsInt({
      message: ErrorCodesEnum.InvalidValue,
      each: true,
    }),
  );
