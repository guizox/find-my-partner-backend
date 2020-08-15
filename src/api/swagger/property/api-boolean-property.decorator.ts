import { ApiProperty } from '@nestjs/swagger';

export const ApiBooleanProperty = (
  description: string,
  required: boolean = true,
) =>
  ApiProperty({
    type: 'boolean',
    required,
    description,
  });
