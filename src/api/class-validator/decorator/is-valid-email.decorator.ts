import { applyDecorators } from '@nestjs/common';
import {
  IsString,
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsEmail,
} from 'class-validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';
import { IsValidString } from './is-valid-string.decorator';

export const IsValidEmail = () =>
  applyDecorators(
    IsValidString(),
    IsEmail(
      {
        require_tld: true,
      },
      {
        message: ErrorCodesEnum.InvalidValue,
      },
    ),
  );
