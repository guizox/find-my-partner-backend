import { ApiQuery } from '@nestjs/swagger';
import { SwaggerEnumType } from '@nestjs/swagger/dist/types/swagger-enum.type';

export const ApiEnumQuery = (
  enumOptions: SwaggerEnumType,
  name: string,
  description: string,
  required: boolean = true,
) =>
  ApiQuery({
    name,
    enum: enumOptions,
    required,
    description,
  });
