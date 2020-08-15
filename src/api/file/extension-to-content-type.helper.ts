export function extensionToContentTypeHelper(extension: string): string {
  switch (extension.toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.bmp':
      return 'image/bmp';
    case '.png':
      return 'image/png';
    case '.pdf':
      return 'application/pdf';
    case '.xml':
      return 'application/xml';
    case '.docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case '.zip':
      return 'application/zip';
    case '.csv':
      return 'text/csv';
    default:
      return 'text/plain';
  }
}
