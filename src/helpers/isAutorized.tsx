const isAutorized = (route: any, user: any) => {
  if (user?.roles?.includes('admin')) {
    return true;
  }

  let functionPermission = false;
  if (!route.moduleName && !route.functionName) {
    functionPermission = true;
  }
  if (route.moduleName && route.functionName && user?.functions?.length) {
    const isAutorized = user.functions.find(
      (f: any) => f.moduleName === route.moduleName && f.functionName === route.functionName,
    );
    functionPermission = !!isAutorized;
  }

  return functionPermission;
};

export default isAutorized;
