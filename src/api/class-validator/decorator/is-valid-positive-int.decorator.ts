import { applyDecorators } from '@nestjs/common';
import { IsInt, Min, IsNotEmpty } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';

export const IsValidPositiveInt = (minValue: number = 0) =>
  applyDecorators(
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
    }),
    IsInt({
      message: ErrorCodesEnum.InvalidValue,
    }),
    Min(minValue, {
      message: ErrorCodesEnum.InvalidValue,
    }),
  );
