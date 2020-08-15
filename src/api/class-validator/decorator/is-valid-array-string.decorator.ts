import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';
import { applyDecorators } from '@nestjs/common';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';
import { Transform } from 'class-transformer';
import { isArray } from 'util';

export const IsValidArrayString = (
  maxLength: number = DefaultStringMaxLength.RegularString,
  minLength: number = 1,
) =>
  applyDecorators(
    Transform((value: any) =>
      isArray(value)
        ? value.map(v => (typeof v === 'string' ? v.trim() : v))
        : value,
    ),
    IsArray({
      message: ErrorCodesEnum.InvalidValue,
    }),
    IsNotEmpty({
      message: ErrorCodesEnum.InvalidValue,
      each: true,
    }),
    IsString({
      message: ErrorCodesEnum.InvalidValue,
      each: true,
    }),
    MaxLength(maxLength, {
      message: ErrorCodesEnum.InvalidValue,
      each: true,
    }),
    MinLength(minLength, {
      message: ErrorCodesEnum.InvalidValue,
      each: true,
    }),
  );
