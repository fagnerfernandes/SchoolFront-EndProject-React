import http from '../helpers/http';
import ActivitySettingsInterface from '../interfaces/ActivitySettingsInterface';

const ActivitySettings = (token: string) => {
  const headers = {
    'x-access-token': token,
  };

  return {
    listByType: async (activityType: string) => {
      const result = await http.get(`/activity-settings/${activityType}/type`, {
        headers,
      });
      return result.data;
    },
    show: async (id: string) => {
      const result = await http.get(`/activity-settings/${id}`, {
        headers,
      });
      return result.data;
    },
    create: async (body: Partial<ActivitySettingsInterface>) => {
      const result = await http.post(`/activity-settings`, body, { headers });
      return result.data;
    },
    delete: async (id: string) => {
      const result = await http.delete(`/activity-settings/${id}`, {
        headers,
      });
      return result.data;
    },
  };
};

export default ActivitySettings;
