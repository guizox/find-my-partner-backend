import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import moment from 'moment';

@ValidatorConstraint()
export class DateValidator implements ValidatorConstraintInterface {
  validate(value: any) {
    return !!value && moment(value).isValid();
  }

  defaultMessage(args: ValidationArguments) {
    return 'Text ($value) is not a valid date';
  }
}
