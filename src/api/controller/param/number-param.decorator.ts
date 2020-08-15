import { Param } from '@nestjs/common';
import { ConvertToNumberPipe } from 'src/api/pipe/convert-to-number.pipe';

export function NumberParam(property: string): ParameterDecorator {
  return Param(property, new ConvertToNumberPipe(property, true));
}
