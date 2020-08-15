import { applyDecorators } from '@nestjs/common';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';
import { Transform } from 'class-transformer';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';

/** Validates if the value is a valid string within the configure lengths */
export const IsValidString = (
  maxLength: number = DefaultStringMaxLength.RegularString,
  minLength: number = 1,
) =>
  applyDecorators(
    Transform((value: any) =>
      typeof value === 'string' ? value.trim() : value,
    ),
    IsString({
      message: ErrorCodesEnum.InvalidValue,
    }),
    MaxLength(maxLength, {
      message: ErrorCodesEnum.InvalidValue,
    }),
    MinLength(minLength, {
      message: ErrorCodesEnum.InvalidValue,
    }),
  );
