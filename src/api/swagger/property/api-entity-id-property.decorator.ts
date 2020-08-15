import { ApiIntProperty } from './api-int-property.decorator';

/** Indicates the the property is a positive integer */
export const ApiEntityIdProperty = (
  description: string = 'Entity id',
  required: boolean = true,
) => ApiIntProperty(description, required, 999, 1);
