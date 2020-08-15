import { PipeTransform, Injectable } from '@nestjs/common';
import { isArray } from 'util';

@Injectable()
export class ConvertToArrayPipe<T> implements PipeTransform {
  async transform(value?: T | T[]): Promise<T[]> {
    if (!value) return null;
    return isArray(value) ? value : [value];
  }
}
