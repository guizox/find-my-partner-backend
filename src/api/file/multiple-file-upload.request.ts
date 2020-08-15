import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyObject } from 'class-validator';
import { ErrorCodesEnum } from '../exception/error-codes.enum';

export class FileUploadRequest {
  @ApiProperty({
    description: 'User profile picture in .jpg, .jpeg or .png',
    type: 'string',
    format: 'binary',
    required: true,
  })
  @IsNotEmptyObject({
    message: ErrorCodesEnum.IsRequired,
  })
  file: Express.Multer.File;
}

export class FileResponse {
  @ApiProperty({
    description: 'The binary file',
    type: 'string',
    format: 'binary',
    required: true,
  })
  file: string;
}

export class MultipleFilesUploadRequest {
  @ApiProperty({
    description: 'User profile picture in .jpg, .jpeg or .png',
    type: 'string',
    format: 'binary',
    required: true,
    isArray: true,
  })
  @IsNotEmptyObject({
    message: ErrorCodesEnum.IsRequired,
  })
  files: Express.Multer.File[];
}
