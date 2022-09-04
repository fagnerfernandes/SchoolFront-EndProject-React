const isAdmin = (user: any) => {
  if (user?.roles?.includes('admin')) {
    return true;
  }

  return false;
};

export default isAdmin;
