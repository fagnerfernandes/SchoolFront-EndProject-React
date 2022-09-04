import http from '../helpers/http';
import WaitingListInterface from '../interfaces/WaitingListInterface';

const WaitingList = (token: string) => {
  const headers = {
    'x-access-token': token,
  };

  return {
    getNameSchool: async (schoolId: string) => {
      const result = await http.get(`/schools/${schoolId}/nameSchool`, {
        headers,
      });
      return result.data;
    },
    create: async (body: Partial<WaitingListInterface>) => {
      const result = await http.post(`/waitingList/public`, body, { headers });
      return result.data;
    },
  };
};

export default WaitingList;
