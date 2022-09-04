import axios from 'axios';

export const apiBaseUrl = `${process.env.REACT_APP_BACKEND_URL}`;
export const apiVersion = process?.env?.REACT_APP_BACKEND_URL_VERSION
  ? `${process.env.REACT_APP_BACKEND_URL_VERSION}`
  : 'v1';

const headers = {
  'Content-Type': 'application/json',
};

const http = axios.create({
  baseURL: `${apiBaseUrl}/api/${apiVersion}`,
  headers,
});

const storeKeyToken = 'x-access-token';
const storeKeyUser = 'x-access-user';
http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if ([401, 403].includes(error?.response?.status)) {
      localStorage.removeItem(storeKeyToken);
      localStorage.removeItem(storeKeyUser);
      window.location.reload();
    }
    throw error;
  },
);

export default http;
