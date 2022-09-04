const isDirector = (user: any) => {
  if (user?.roles?.includes('user') && user?.group?.name === 'Director') {
    return true;
  }

  return false;
};

export default isDirector;
