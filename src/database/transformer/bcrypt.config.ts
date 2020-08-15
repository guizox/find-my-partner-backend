import { plainToClass } from 'class-transformer';
import { IsValidPositiveInt } from 'src/api/class-validator/decorator/is-valid-positive-int.decorator';
import config from 'config';

export class BcryptConfig {
    @IsValidPositiveInt()
    saltRounds: number;
}

export const bcryptConfig = plainToClass(
    BcryptConfig,
    config.get<BcryptConfig>('bcrypt'),
);
