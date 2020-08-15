import { ApiProperty } from '@nestjs/swagger';

export const ApiArrayStringProperty = (
  description: string,
  required: boolean = true,
  example?: string[],
) =>
  ApiProperty({
    type: [String],
    required,
    example,
    description,
  });
