export interface ValidationErrorMessage {
  property: string;
  children: ValidationErrorMessage[];
  constraints?: {
    [prop: string]: string;
  };
}
