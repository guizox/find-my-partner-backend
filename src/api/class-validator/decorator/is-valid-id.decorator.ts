import { applyDecorators } from '@nestjs/common';
import { IsInt, Min, IsNotEmpty } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';

/** Validate if the property is a positive integer */
export const IsValidId = () =>
  applyDecorators(
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
    }),
    IsInt({
      message: ErrorCodesEnum.InvalidValue,
    }),
    Min(1, {
      message: ErrorCodesEnum.InvalidValue,
    }),
  );
