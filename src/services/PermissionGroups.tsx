import PermissionGroupInterface from '../interfaces/PermissionGroupInterface';
import http from '../helpers/http';

const PermissionGroups = (token: string) => {
  return {
    list: async () => {
      const result = await http.get(`/permission-groups`, {
        headers: {
          'x-access-token': token,
        },
      });
      return (result?.data?.data || []) as PermissionGroupInterface[];
    },
  };
};

export default PermissionGroups;
