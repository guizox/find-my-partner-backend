import { IsArray, IsNotEmpty, IsEnum } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';
import { applyDecorators } from '@nestjs/common';

export const IsValidArrayEnum = (enumType: Object) =>
  applyDecorators(
    IsArray({ message: ErrorCodesEnum.InvalidValue }),
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
      each: true,
    }),
    IsEnum(enumType, {
      message: ErrorCodesEnum.InvalidValue,
      each: true,
    }),
  );
