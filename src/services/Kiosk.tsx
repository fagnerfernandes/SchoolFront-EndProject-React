import http from '../helpers/http';
import { FilteredOptionsInterface, makeQueryParamsForRequest } from '../entities/FilteredOptions';
import KioskInterface from '../interfaces/KioskInterface';
import SchoolInterface from '../interfaces/SchoolInterface';

const Kiosk = (token: string) => {
  const headers = {
    'x-access-token': token,
  };

  return {
    list: async (filteredOptions?: FilteredOptionsInterface) => {
      const params = makeQueryParamsForRequest(filteredOptions);
      const result = await http.get('/franchisees', {
        headers,
        params,
      });
      return result.data;
    },
    show: async (id: string) => {
      const result = await http.get(`/kiosk/${id}/kids`, {
        headers,
      });
      return result.data;
    },
    showUser: async (body: Partial<KioskInterface>) => {
      const result = await http.post(`/kiosk`, body);
      return result.data;
    },
    checkInKids: async (id: string, userId: string, tokenKiosk: string) => {
      const notes: string = '';
      const time: string = '';
      const result = await http.patch(
        `/kids/${id}/checkinKiosk/${userId}`,
        { notes, time, tokenKiosk },
        {
          headers,
        },
      );
      return result.data;
    },
    checkOutKids: async (id: string, userId: string, tokenKiosk: string) => {
      const notes: string = '';
      const time: string = '';
      const result = await http.patch(
        `/kids/${id}/checkoutKiosk/${userId}`,
        { notes, time, tokenKiosk },
        {
          headers,
        },
      );
      return result.data;
    },
    checkInUsers: async (id: string, tokenKiosk: string) => {
      const notes: string = '';
      const time: string = '';
      const result = await http.patch(
        `/users/${id}/checkinKiosk`,
        { notes, time, tokenKiosk },
        {
          headers,
        },
      );
      return result.data;
    },
    checkOutUsers: async (id: string, tokenKiosk: string) => {
      const notes: string = '';
      const time: string = '';
      const result = await http.patch(
        `/users/${id}/checkoutKiosk`,
        { notes, time, tokenKiosk },
        {
          headers,
        },
      );
      return result.data;
    },
    checkToken: async (body: Partial<SchoolInterface>) => {
      const result = await http.post(`/schools/tokenKiosk`, body, { headers });
      return result.data;
    },
  };
};

export default Kiosk;
