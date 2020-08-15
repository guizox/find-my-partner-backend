import * as path from 'path';
import { CustomValidationException } from '../exception/validation.exception';

export const fileFilter = (...extensions: string[]) => (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error, acceptFile: boolean) => void,
) => {
  const ext = path.extname(file.originalname);
  if (!extensions.map(e => e.toUpperCase()).includes(ext.toUpperCase())) {
    callback(new CustomValidationException('file'), false);
  } else {
    callback(null, true);
  }
};
