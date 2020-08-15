import { ApiStringProperty } from './api-string-property.decorator';

export const ApiNaturalPersonDocumentProperty = (required: boolean = true) =>
  ApiStringProperty('Document number (CPF)', required, '111.222.333-44');
