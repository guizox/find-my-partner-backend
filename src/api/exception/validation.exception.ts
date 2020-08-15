import { ErrorCodesEnum } from './error-codes.enum';
import { BadRequestException } from '@nestjs/common';

export class CustomValidationException extends BadRequestException {
  constructor(property: string) {
    super('Bad Request', `${property}: ${ErrorCodesEnum.InvalidValue}`);
  }
}
