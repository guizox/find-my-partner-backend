export function removeSpecialChars(value: any): any {
  return !!value && typeof value === 'string'
    ? value.replace(/[^\w]/gi, '')
    : value;
}
