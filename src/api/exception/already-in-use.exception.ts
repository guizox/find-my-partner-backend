import { ErrorCodesEnum } from './error-codes.enum';
import { BadRequestException } from '@nestjs/common';

export enum AlreadyInUseProperty {
  EMAIL = 'email',
  TELEPHONE = 'telephone',
}

export class AlreadyInUseException extends BadRequestException {
  constructor(property: AlreadyInUseProperty) {
    super(
      'Bad Request',
      `${property}: ${
        property === AlreadyInUseProperty.EMAIL
          ? ErrorCodesEnum.EmailAlreadyInUse
          : ErrorCodesEnum.TelephoneAlreadyInUse
      }`,
    );
  }
}
