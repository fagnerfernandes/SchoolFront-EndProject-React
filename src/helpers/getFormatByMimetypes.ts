const getFormatByMimetypes = (mimetype: string): string => {
  switch (mimetype) {
    case 'image/jpeg' || 'image/jpg':
      return 'jpg';
    case 'image/png':
      return 'png';
    case 'application/pdf' || 'application/octet-stream':
      return 'pdf';
    default:
      return '';
  }
};

export default getFormatByMimetypes;
