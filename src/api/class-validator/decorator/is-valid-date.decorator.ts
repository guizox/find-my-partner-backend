import { Validate } from 'class-validator';
import { DateValidator } from '../custom-validators-class/date.validator';
import { ErrorCodesEnum } from 'src/api/exception/error-codes.enum';

export const IsValidDate = () =>
  Validate(DateValidator, {
    message: ErrorCodesEnum.InvalidValue,
  });
