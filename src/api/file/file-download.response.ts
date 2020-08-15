import { ApiProperty } from '@nestjs/swagger';

export class FileDownloadResponse {
  @ApiProperty({
    description: 'The binary file',
    type: 'string',
    format: 'binary',
    required: true,
  })
  file: string;
}
