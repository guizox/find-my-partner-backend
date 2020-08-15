import { applyDecorators } from '@nestjs/common';
import { IsNotEmpty, IsEnum } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';

export const IsValidEnum = (enumType: Object) =>
  applyDecorators(
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
    }),
    IsEnum(enumType, {
      message: ErrorCodesEnum.InvalidValue,
    }),
  );
