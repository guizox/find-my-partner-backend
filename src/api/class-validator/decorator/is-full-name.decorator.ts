import { Validate } from 'class-validator';

export const IsValidFullName = (prop?: string) =>
  !prop || (!!prop && prop.split(' ').length > 1);
