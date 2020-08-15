import { ApiProperty } from '@nestjs/swagger';

export const ApiTextProperty = (
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'string',
    required,
    description,
  });
