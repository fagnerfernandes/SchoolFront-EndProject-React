const getTokenData = (token: string) => {
  const parts = token.split('.');

  if (!parts[1]) {
    return false;
  }

  const payload = Buffer.from(parts[1], 'base64').toString('ascii');

  return JSON.parse(payload);
};

export default getTokenData;
