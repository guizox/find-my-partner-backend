import { ValidationErrorMessage } from './validation-error-message.interface';

export function getErrorFromClassValidator(
  messages: ValidationErrorMessage[],
): {
  property: string;
  constraint: string;
} {
  const [message, ..._messages] = messages;
  if (!!message.constraints) {
    const keys = Object.keys(message.constraints);
    return {
      property: message.property,
      constraint: message.constraints[keys[0]],
    };
  } else if (!!message.children && message.children.length > 0) {
    return getErrorFromClassValidator(message.children);
  } else {
    return {
      property: 'unknown',
      constraint: 'unknown',
    };
  }
}
