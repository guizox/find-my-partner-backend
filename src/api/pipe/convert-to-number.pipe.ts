import { PipeTransform, Injectable } from '@nestjs/common';
import { isArray } from 'util';
import { CustomValidationException } from '../exception/validation.exception';

@Injectable()
export class ConvertToNumberPipe implements PipeTransform {
  constructor(
    private readonly propName: string,
    private readonly isRequired: boolean = false,
  ) {}

  private converToNumber(value?: any): number {
    if (value === null || value === undefined) {
      if (this.isRequired) {
        throw new CustomValidationException(this.propName);
      } else {
        return value;
      }
    }
    const numberValue = Number(value);
    if (isNaN(numberValue)) throw new CustomValidationException(this.propName);
    return numberValue;
  }

  async transform(value?: any): Promise<number | number[]> {
    return isArray(value)
      ? value.map(this.converToNumber)
      : this.converToNumber(value);
  }
}
