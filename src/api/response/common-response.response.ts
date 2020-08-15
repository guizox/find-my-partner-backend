import { HttpStatus } from '@nestjs/common';
import { ApiEnumProperty } from '../swagger/property/api-enum-property.decorator';
import { ApiStringProperty } from '../swagger/property/api-string-property.decorator';

/** A common response to just indicate a generic message */
export class CommonResponse {
  @ApiEnumProperty(HttpStatus, 'Response status code')
  statusCode: HttpStatus;

  @ApiStringProperty('Response message')
  message: string;

  @ApiStringProperty('Error message', false)
  error?: string;

  constructor(statusCode: HttpStatus, message: string, error?: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}
