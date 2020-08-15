import { IsNumber, IsNotEmpty } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';
import { applyDecorators } from '@nestjs/common';

export const IsValidMoneyValue = () =>
  applyDecorators(
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
    }),
    IsNumber(
      {
        maxDecimalPlaces: 2,
      },
      {
        message: ErrorCodesEnum.InvalidValue,
      },
    ),
  );
