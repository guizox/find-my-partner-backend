import { IsBoolean, IsNotEmpty } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';
import { applyDecorators } from '@nestjs/common';

export const IsValidBoolean = () =>
  applyDecorators(
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
    }),
    IsBoolean({
      message: ErrorCodesEnum.InvalidValue,
    }),
  );
