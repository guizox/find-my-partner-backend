import { applyDecorators } from '@nestjs/common';
import { IsString, MaxLength } from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';
import { Transform } from 'class-transformer';
import { DefaultStringMaxLength } from 'src/database/enum/string-length';

export const CanBeEmptyString = (
  maxLength: number = DefaultStringMaxLength.RegularString,
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
  );
