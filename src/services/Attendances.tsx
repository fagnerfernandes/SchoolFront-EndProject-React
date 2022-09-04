import http from '../helpers/http';
import AttendancesBodyInterface from '../interfaces/AttendancesBodyInterface';

const ActivitySettings = (token: string) => {
  const headers = {
    'x-access-token': token,
  };

  return {
    listByUser: async (userId: string, query?: string) => {
      const result = await http.get(`/users/${userId}/attendances${query ? `?${query}` : ''}`, {
        headers,
      });
      return result.data;
    },
    createByUser: async (userId: string, body: Partial<AttendancesBodyInterface>) => {
      const result = await http.post(`/users/${userId}/attendances`, body, { headers });
      return result.data;
    },
    updateByUser: async (userId: string, body: Partial<AttendancesBodyInterface>) => {
      const result = await http.put(`/users/${userId}/attendances`, body, { headers });
      return result.data;
    },
    delete: async (id: string) => {
      const result = await http.delete(`/attendances/${id}`, {
        headers,
      });
      return result.data;
    },
  };
};

export default ActivitySettings;
