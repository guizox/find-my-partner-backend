import { ApiProperty } from '@nestjs/swagger';

export const ApiArrayIntProperty = (
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'array',
    items: {
      type: 'integer',
      format: 'int32',
    },
    required,
    description,
  });
