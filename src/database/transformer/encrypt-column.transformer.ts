import { removeSpecialChars } from '../../common/remove-special-chars';
import { bcryptConfig } from './bcrypt.config';
import bcryptjs from 'bcryptjs';

export class EncryptColumnTransformer {
  to(data: string): string {
    const saltRounds = bcryptConfig.saltRounds;
    const salt = bcryptjs.genSaltSync(saltRounds);
    return bcryptjs.hashSync(data, salt);
  }
  from(data: string): string {
    return data;
  }
}
