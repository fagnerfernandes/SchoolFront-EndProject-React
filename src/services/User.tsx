import { FilteredOptionsInterface, makeQueryParamsForRequest } from '../entities/FilteredOptions';
import http from '../helpers/http';

const User = (token: string) => {
  const headers = {
    'x-access-token': token,
  };

  return {
    profile: async () => {
      const result = await http.get('/users/profile', {
        headers,
      });
      return result.data;
    },

    list: async (filteredOptions?: FilteredOptionsInterface) => {
      const params = makeQueryParamsForRequest(filteredOptions);
      const result = await http.get('/users', {
        headers,
        params,
      });
      return result.data;
    },
    show: async (id: string) => {
      const result = await http.get(`/users/${id}`, {
        headers,
      });
      return result.data;
    },

    listFilter: async (ids: string[]) => {
      const params = { ids: JSON.stringify(ids) };
      const result = await http.get(`/users/filter`, {
        headers,
        params,
      });
      return result.data;
    },
  };
};

export default User;
