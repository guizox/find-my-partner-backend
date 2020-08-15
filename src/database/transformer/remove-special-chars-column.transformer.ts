import { removeSpecialChars } from '../../common/remove-special-chars';

export class RemoveSpecialCharsColumnTransformer {
  to(data: string): string {
    return removeSpecialChars(data);
  }
  from(data: string): string {
    return data;
  }
}
