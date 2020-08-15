import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { CommonResponse } from '../response/common-response.response';
import { getErrorFromClassValidator } from './get-error-from-class-validator';

@Catch()
export class GlobalExceptionHandler extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (this.isValidationError(exception)) {
      const error = getErrorFromClassValidator(exception.response.message);
      const responseObject = new CommonResponse(
        exception.response.statusCode as HttpStatus,
        exception.response.error,
        `${error.property}: ${error.constraint}`,
      );
      const ctx = host.switchToHttp();
      const res = ctx.getResponse<Response>();
      res.status(responseObject.statusCode).send(responseObject);
    } else {
      super.catch(exception, host);
    }
  }

  private isValidationError(exception: any): boolean {
    const { response } = exception;
    return (
      !!response &&
      response.statusCode === 400 &&
      Array.isArray(response.message) &&
      response.message.length > 0
    );
  }
}
