import { ApiProperty } from '@nestjs/swagger';

export const ApiMoneyProperty = (
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'number',
    required,
    example: 122.34,
    description,
  });
